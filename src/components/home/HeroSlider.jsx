import { useEffect, useState } from "react";
import "../../styles/hero.css";

import slide1 from "../../assets/image/slider1.jpg";
import slide2 from "../../assets/image/slider2.jpg";
import slide3 from "../../assets/image/slider3.jpg";
import slide4 from "../../assets/image/slider4.jpg";

const slides = [slide1, slide2, slide3, slide4];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const getClass = (index) => {
    const total = slides.length;

    if (index === current) return "slide active";
    if (index === (current - 1 + total) % total) return "slide left";
    if (index === (current + 1) % total) return "slide right";

    return "slide hidden";
  };

  return (
    <div
      className="hero-bg"
      style={{
        backgroundImage: `url(${slides[current]})`,
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-container">
        {slides.map((img, index) => (
          <div key={index} className={getClass(index)}>
            <img src={img} alt="slider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
