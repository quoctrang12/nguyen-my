import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

interface Guest {
  id: string;
  name: string;
}

const AttendeeMarquee: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [newGuest, setNewGuest] = useState<string | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'rsvps'),
      where('attendance', '==', 'yes'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestList: Guest[] = [];
      snapshot.forEach((doc) => {
        guestList.push({ id: doc.id, name: doc.data().name });
      });
      
      // If there are new guests and we already had guests loaded, show a notification
      if (guests.length > 0 && guestList.length > guests.length) {
        const added = snapshot.docChanges().filter(change => change.type === 'added');
        if (added.length > 0) {
          setNewGuest(added[0].doc.data().name);
          setTimeout(() => setNewGuest(null), 5000); // Hide after 5 seconds
        }
      }
      
      setGuests(guestList);
    }, (error) => {
      console.error("Error fetching RSVPs: ", error);
    });

    return () => unsubscribe();
  }, [guests.length]); // Re-run effect if length changes to track new additions correctly

  if (guests.length === 0) return null;

  return (
    <>
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text">
            🎉 Cảm ơn các khách mời đã xác nhận tham dự: {guests.map(g => g.name).join(' • ')}
          </span>
          <span className="marquee-text">
            🎉 Cảm ơn các khách mời đã xác nhận tham dự: {guests.map(g => g.name).join(' • ')}
          </span>
        </div>
      </div>

      {/* Notification Toast */}
      {newGuest && (
        <div className="toast-notification">
          <div className="toast-content">
            <span className="toast-icon">💌</span>
            <div>
              <strong>{newGuest}</strong> vừa xác nhận tham dự!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AttendeeMarquee;
