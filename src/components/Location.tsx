import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="section-padding">
      <div className="container">
        <h2 className="section-title">Địa Điểm Tổ Chức</h2>
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-5 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 bg-white rounded-4 shadow-sm border">
              <h3 className="mb-4 text-center">Nhà Hàng Tiệc Cưới Grand Palace</h3>
              <div className="d-flex mb-3">
                <MapPin className="text-danger me-3 flex-shrink-0" size={24} />
                <p className="mb-0">142/18 Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh</p>
              </div>
              <div className="text-center mt-4">
                <a 
                  href="https://maps.google.com/?q=Grand+Palace+Wedding+and+Convention" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger rounded-pill px-4"
                >
                  Chỉ Đường Trên Google Maps
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.125109048386!2d106.65588331533425!3d10.80172799230438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529371596d1b5%3A0x1121c618e3650644!2sGrand%20Palace%20Wedding%20and%20Convention!5e0!3m2!1sen!2s!4v1645000000000!5m2!1sen!2s" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
