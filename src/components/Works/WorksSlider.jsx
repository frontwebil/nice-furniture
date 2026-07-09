import { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SWIPE_THRESHOLD = 50; // px

export function WorksSlider({
  currentSlideSrc,
  closeSlider,
  nextSlide,
  prevSlide,
}) {
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeSlider();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeSlider, nextSlide, prevSlide]);

  // свайпи на тачскрінах
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX <= -SWIPE_THRESHOLD) nextSlide();
    if (deltaX >= SWIPE_THRESHOLD) prevSlide();
  };

  return (
    <div className="worksSlider" onClick={() => closeSlider()}>
      <IoMdClose
        className="worksSlider-icon-close"
        onClick={() => closeSlider()}
      />
      <div
        className="worksSlider-container"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <FaArrowLeft
          className="worksSlider-icon worksSlider-icon-prev"
          onClick={() => prevSlide()}
        />
        <img src={currentSlideSrc} alt="" className="worksSlider-image" />
        <FaArrowRight
          className="worksSlider-icon worksSlider-icon-next"
          onClick={() => nextSlide()}
        />
      </div>
    </div>
  );
}
