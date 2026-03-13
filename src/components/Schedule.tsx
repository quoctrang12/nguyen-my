import React from 'react';
import { motion } from 'motion/react';
import { Users, BookHeart, Utensils, Music } from 'lucide-react';

const Schedule: React.FC = () => {
  const events = [
    {
      time: "17:00",
      title: "Đón Khách",
      description: "Cùng chụp những bức ảnh kỷ niệm tuyệt đẹp với cô dâu chú rể.",
      icon: <Users size={30} />
    },
    {
      time: "18:30",
      title: "Làm Lễ",
      description: "Cùng chứng kiến khoảnh khắc thiêng liêng khi hai người trao lời thề nguyện.",
      icon: <BookHeart size={30} />
    },
    {
      time: "19:00",
      title: "Khai Tiệc",
      description: "Thưởng thức bữa tối ấm cúng và những ly rượu vang ngọt ngào.",
      icon: <Utensils size={30} />
    },
    {
      time: "20:30",
      title: "Khiêu Vũ & Trò Chơi",
      description: "Hòa mình vào âm nhạc và những trò chơi vui nhộn cùng mọi người.",
      icon: <Music size={30} />
    }
  ];

  return (
    <section id="schedule" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Lịch Trình Sự Kiện</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                className="schedule-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="schedule-icon">
                  {event.icon}
                </div>
                <div>
                  <div className="schedule-time">{event.time}</div>
                  <h4 className="mb-2">{event.title}</h4>
                  <p className="mb-0 text-muted">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
