import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CalendarHeart } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Địa Điểm Tổ Chức</h2>
        <div className="row">
          {/* Nhà Gái */}
          <motion.div 
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 bg-white rounded-4 shadow-sm border h-100 d-flex flex-column">
              <h3 className="mb-4 text-center" style={{ color: 'var(--primary-color)' }}>Tiệc Cưới Nhà Gái</h3>
              <div className="d-flex mb-3">
                <CalendarHeart className="text-danger me-3 flex-shrink-0" size={24} />
                <p className="mb-0 fw-bold">Chủ Nhật, 29 Tháng 03 Năm 2026</p>
              </div>
              <div className="d-flex mb-4 flex-grow-1">
                <MapPin className="text-danger me-3 flex-shrink-0" size={24} />
                <p className="mb-0">
                  Tại gia đình nhà gái<br/>
                  <span className="text-muted fst-italic">(Địa chỉ chi tiết sẽ được cập nhật sau)</span>
                </p>
              </div>
              <div className="text-center mt-auto">
                <button className="btn btn-secondary rounded-pill px-4" disabled>
                  Bản đồ đang cập nhật...
                </button>
              </div>
            </div>
          </motion.div>

          {/* Nhà Trai */}
          <motion.div 
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-4 bg-white rounded-4 shadow-sm border h-100 d-flex flex-column">
              <h3 className="mb-4 text-center" style={{ color: 'var(--primary-color)' }}>Tiệc Cưới Nhà Trai</h3>
              <div className="d-flex mb-3">
                <CalendarHeart className="text-danger me-3 flex-shrink-0" size={24} />
                <p className="mb-0 fw-bold">Thứ Hai, 30 Tháng 03 Năm 2026</p>
              </div>
              <div className="d-flex mb-4 flex-grow-1">
                <MapPin className="text-danger me-3 flex-shrink-0" size={24} />
                <p className="mb-0">
                  Tại gia đình nhà trai<br/>
                  Gần bến phà Năm Căn, Ngọc Hiển, Cà Mau<br/>
                  <span className="text-muted">(Tìm trên Google Maps: Tạp hóa Nguyễn Sang)</span>
                </p>
              </div>
              <div className="text-center mt-auto">
                <a 
                  href="https://maps.google.com/?q=Tạp+hóa+Nguyễn+Sang,+Ngọc+Hiển,+Cà+Mau" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger rounded-pill px-4"
                >
                  Chỉ Đường Trên Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bản đồ Nhà Trai */}
        <motion.div 
          className="row mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="col-12">
            <div className="ratio ratio-21x9 rounded-4 overflow-hidden shadow-sm border">
              <iframe 
                src="https://maps.google.com/maps?q=Tạp+hóa+Nguyễn+Sang,+Ngọc+Hiển,+Cà+Mau&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Tiệc Cưới Nhà Trai"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
