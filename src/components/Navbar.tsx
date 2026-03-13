import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#hero">N & M</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#invitation">Thư Mời</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#story">Chuyện Tình</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Album</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#schedule">Lịch Trình</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#location">Địa Điểm</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rsvp">Tham Dự</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
