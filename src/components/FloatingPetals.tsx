import React, { useEffect, useState } from 'react';

const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<{ id: number; left: string; animationDuration: string; animationDelay: string; width: string; height: string }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      width: `${Math.random() * 10 + 10}px`,
      height: `${Math.random() * 10 + 10}px`,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="petals-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            width: petal.width,
            height: petal.height,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
