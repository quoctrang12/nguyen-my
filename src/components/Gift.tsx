import React from 'react';
import { motion } from 'motion/react';
import { Gift as GiftIcon } from 'lucide-react';

const Gift: React.FC = () => {
  return (
    <section id="gift" className="section-padding bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GiftIcon size={48} className="mb-3" style={{ color: 'var(--accent-color)' }} />
              <h2 className="section-title mb-4">Gửi Lời Chúc & Quà Tặng</h2>
              <p className="mb-5">
                Sự hiện diện của bạn là món quà quý giá nhất đối với chúng tôi. 
                Nếu bạn muốn gửi thêm những lời chúc tốt đẹp hoặc món quà nhỏ, bạn có thể quét mã QR dưới đây.
              </p>
              
              <div className="row g-4 justify-content-center">
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                    <h5 className="mb-3">Mừng Cưới Chú Rể</h5>
                    <img 
                      src="https://img.vietqr.io/image/sacombank-070120685978-compact2.png?accountName=NGUYEN%20THAI%20NGUYEN" 
                      alt="QR Code VietQR Chú Rể" 
                      className="img-fluid mb-3 mx-auto rounded"
                      style={{ maxWidth: '220px' }}
                    />
                    <p className="mb-1 fw-bold">Ngân hàng Sacombank</p>
                    <p className="mb-0 text-muted small">STK: 070120685978</p>
                    <p className="mb-0 text-muted small">Tên: NGUYEN THAI NGUYEN</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                    <h5 className="mb-3">Mừng Cưới Cô Dâu</h5>
                    <img 
                      src="https://img.vietqr.io/image/sacombank-070139735402-compact2.png?accountName=HUYNH%20KIEU%20MY" 
                      alt="QR Code VietQR Cô Dâu" 
                      className="img-fluid mb-3 mx-auto rounded"
                      style={{ maxWidth: '220px' }}
                    />
                    <p className="mb-1 fw-bold">Ngân hàng Sacombank</p>
                    <p className="mb-0 text-muted small">STK: 070139735402</p>
                    <p className="mb-0 text-muted small">Tên: HUYNH KIEU MY</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
