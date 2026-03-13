import React from 'react';
import { motion } from 'motion/react';

const Invitation: React.FC = () => {
  return (
    <section id="invitation" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <motion.div 
              className="invitation-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title mb-4">Lời Mời</h2>
              <p className="lead mb-4">
                Tình yêu là điều tuyệt vời nhất mà cuộc sống ban tặng. 
                Chúng tôi vô cùng hạnh phúc được chia sẻ niềm vui này cùng bạn.
              </p>
              <p>
                Trân trọng kính mời Quý khách đến dự buổi tiệc chung vui cùng gia đình chúng tôi.
                Sự hiện diện của Quý khách là niềm vinh hạnh và là lời chúc phúc tuyệt vời nhất dành cho hai vợ chồng.
              </p>
              <div className="mt-5">
                <h4 className="cursive">Trân trọng,</h4>
                <h3 className="cursive mt-3">Thái Nguyên & Kiều My</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
