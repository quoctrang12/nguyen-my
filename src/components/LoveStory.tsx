import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircleHeart, Gem } from 'lucide-react';

const LoveStory: React.FC = () => {
  const milestones = [
    {
      id: 1,
      title: "Lần Đầu Gặp Gỡ",
      date: "10 Tháng 5, 2022",
      description: "Một ngày nắng đẹp, ánh mắt chạm nhau và trái tim lỡ nhịp. Đó là khởi đầu cho một câu chuyện tình yêu tuyệt đẹp.",
      icon: <Heart size={24} />,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Lời Tỏ Tình",
      date: "14 Tháng 2, 2023",
      description: "Dưới ánh nến lung linh và tiếng nhạc du dương, lời yêu thương được trao gửi và nhận lại nụ cười rạng rỡ.",
      icon: <MessageCircleHeart size={24} />,
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Cầu Hôn",
      date: "24 Tháng 12, 2024",
      description: "Khoảnh khắc chiếc nhẫn được trao tay, giọt nước mắt hạnh phúc rơi xuống. 'Em đồng ý!'",
      icon: <Gem size={24} />,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="story" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Chuyện Tình Yêu</h2>
        <ul className="timeline">
          {milestones.map((milestone, index) => (
            <li key={milestone.id} className="timeline-item">
              <motion.div 
                className="timeline-badge"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {milestone.icon}
              </motion.div>
              <motion.div 
                className="timeline-panel"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-heading">
                  <h4 className="timeline-title">{milestone.title}</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> {milestone.date}</small></p>
                </div>
                <div className="timeline-body">
                  <p>{milestone.description}</p>
                  <img src={milestone.image} alt={milestone.title} className="timeline-image" />
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LoveStory;
