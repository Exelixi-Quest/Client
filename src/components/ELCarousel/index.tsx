import React, { useState } from 'react';
import { CarouselProps } from '../../types';


export const ELCarousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  showControls = true,
  showIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval]);

  return (
    <div className="carousel-container">
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>

      {showControls && (
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carousel-control prev" aria-label="Previous slide">
            &lt;
          </button>
          <button onClick={nextSlide} className="carousel-control next" aria-label="Next slide">
            &gt;
          </button>
        </div>
      )}

      {showIndicators && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

