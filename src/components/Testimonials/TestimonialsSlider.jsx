import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export function TestimonialsSlider({
  currentSlideSrc,
  closeSlider,
  nextSlide,
  prevSlide,
}) {
  return (
    <div className="testimonialsSlider">
      <IoMdClose
        className="testimonialsSlider-icon-close"
        onClick={() => closeSlider()}
      />
      <div className="testimonialsSlider-container">
        <FaArrowLeft
          className="testimonialsSlider-icon"
          onClick={() => prevSlide()}
        />
        <img
          src={currentSlideSrc}
          alt=""
          className="testimonialsSlider-image"
        />
        <FaArrowRight
          className="testimonialsSlider-icon"
          onClick={() => nextSlide()}
        />
      </div>
    </div>
  );
}
