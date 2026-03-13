import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { MessageSquareHeart, X } from 'lucide-react';

interface RSVPData {
  id: string;
  name: string;
  attendance: string;
  guests?: string;
  wishes?: string;
  createdAt: any;
}

const GuestWishes: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rsvps, setRsvps] = useState<RSVPData[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'rsvps'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: RSVPData[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as RSVPData);
      });
      setRsvps(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <button 
        className="guestbook-btn" 
        onClick={() => setIsOpen(true)}
        aria-label="Xem lời chúc"
      >
        <MessageSquareHeart size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="guestbook-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="guestbook-header">
              <h5 className="mb-0 cursive" style={{ fontSize: '1.8rem' }}>Sổ Lưu Bút</h5>
              <button className="btn-close-panel" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="guestbook-content">
              {rsvps.length === 0 ? (
                <p className="text-center text-muted mt-4">Chưa có lời chúc nào. Hãy là người đầu tiên!</p>
              ) : (
                rsvps.map((rsvp) => (
                  <div key={rsvp.id} className="guestbook-item">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0 fw-bold">{rsvp.name}</h6>
                      <span className={`badge ${rsvp.attendance === 'yes' ? 'bg-success' : 'bg-secondary'}`}>
                        {rsvp.attendance === 'yes' ? 'Tham dự' : 'Không tham dự'}
                      </span>
                    </div>
                    {rsvp.wishes && (
                      <p className="mb-0 fst-italic text-muted">"{rsvp.wishes}"</p>
                    )}
                    {rsvp.attendance === 'yes' && rsvp.guests && (
                      <small className="text-muted d-block mt-2">Đi cùng: {rsvp.guests}</small>
                    )}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GuestWishes;
