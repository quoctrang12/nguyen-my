import React from 'react';
import FloatingPetals from './components/FloatingPetals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import LoveStory from './components/LoveStory';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Gift from './components/Gift';
import RSVP from './components/RSVP';
import AttendeeMarquee from './components/AttendeeMarquee';
import GuestWishes from './components/GuestWishes';

export default function App() {
  return (
    <div className="app-container" style={{ paddingBottom: '50px' }}>
      <FloatingPetals />
      <Navbar />
      <Hero />
      <Invitation />
      <LoveStory />
      <Gallery />
      <Schedule />
      <Location />
      <Gift />
      <RSVP />
      
      <footer className="text-center py-4 bg-white text-muted">
        <p className="mb-0">© 2026 Thái Nguyên & Kiều My. All rights reserved.</p>
        <p className="small mt-1">Made with ❤️ for our special day</p>
      </footer>

      <AttendeeMarquee />
      <GuestWishes />
    </div>
  );
}
