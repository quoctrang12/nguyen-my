import React, { useState } from 'react';
import { motion } from 'motion/react';

const Gallery: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState(8);
  const images = [
    "/1.jpg",
    "/11375560641684761172.jpg",
    "/14924598224955195021.jpg",
    "/238090160127671000919.jpg",
    "/240727824911732481025.jpg",
    "/240727824911732481026.jpg",
    "/253769227056928427131.jpg",
    "/25376922705692842716.jpg",
    "/25769736335109557724.jpg",
    "/267148058428250995933.jpg",
    "/267148058428250995934.jpg",
    "/267148058428250995935.jpg",
    "/29201319500401040273.jpg",
    "/29201319500401040274.jpg",
    "/293776181885885956214.jpg",
    "/297651002080464161322.jpg",
    "/310668961054379744032.jpg",
    "/31086343082956094117.jpg",
    "/31086343082956094118.jpg",
    "/336541976695043797330.jpg",
    "/38475872060870231418.jpg",
    "/404607932990945546428.jpg",
    "/404607932990945546429.jpg",
    "/414330646534727096416.jpg",
    "/414330646534727096417.jpg",
    "/427088176764328111927.jpg",
    "/42708817676432811195.jpg",
    "/52871600295291515710.jpg",
    "/5287160029529151579.jpg",
    "/64214884971935438820.jpg",
    "/82665244697906929213.jpg",
    "/82665244697906929221.jpg",
    "/82665244697906929223.jpg",
    "/82960451533229467512.jpg",
    "/84151242961387821711.jpg"
  ];

  const handleShowMore = () => {
    setVisibleImages(prev => Math.min(prev + 8, images.length));
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <h2 className="section-title">Album Cưới</h2>
        <div className="gallery-grid">
          {images.slice(0, visibleImages).map((img, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={img} alt={`Wedding moment ${index + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
        {visibleImages < images.length && (
          <div className="text-center mt-5">
            <button 
              onClick={handleShowMore}
              className="btn btn-primary"
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
