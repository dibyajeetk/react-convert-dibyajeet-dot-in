import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/ImageSlider.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-body">
      {/* Left button */}
      <button className="icon-only-btn left" onClick={handlePrevClick}>
        <i className="bi bi-chevron-left icon"></i>
      </button>

      {/* Right button */}
      <button className="icon-only-btn right" onClick={handleNextClick}>
        <i className="bi bi-chevron-right icon"></i>
      </button>

      {/* Image container with img tag */}
      <img
        className="slide-image"
        src={slides[currentIndex].url}
        alt={slides[currentIndex].title}
      />

      {/* Slide indicators (dots) */}
      <div className="slide-indicator">
        {slides.map((slide, slideIndex) => (
          <span
            key={slideIndex}
            className={`dot-indicator ${
              slideIndex === currentIndex ? "active-indicator" : ""
            }`}
            onClick={() => goToSlide(slideIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
