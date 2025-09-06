import "../css/ImageSlider.css";
function ImageSlider() {
  return (
    <div className="slider-body">
      <button className="icon-only-btn">
        <i className="bi bi-chevron-left icon"></i>
      </button>
      <button className="icon-only-btn">
        <i className="bi bi-chevron-right icon"></i>
      </button>
      <div className="slide-indicator">
        <span className="current-indicator"></span>
        <span className="dot-indicator"></span>
      </div>
      <div className="image-container"></div>
    </div>
  );
}

export default ImageSlider;
