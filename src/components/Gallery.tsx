import React from 'react';
import { motion } from 'motion/react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532712938736-59c79dd84594?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <h2 className="section-title">Album Cưới</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
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
      </div>
    </section>
  );
};

export default Gallery;
