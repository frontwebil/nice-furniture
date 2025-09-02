import { useRef, useState, useEffect } from "react";
import "./KitchenSlider.css";
import { useSwipeable } from "react-swipeable";

export function KitchenSlider({ currentKitchen }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.clientX);
    setScrollStart(navRef.current.scrollLeft);
    navRef.current.style.cursor = "grabbing";
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentSlide((prev) =>
        prev === currentKitchen.gallery.length - 1 ? 0 : prev + 1
      ),
    onSwipedRight: () =>
      setCurrentSlide((prev) =>
        prev === 0 ? currentKitchen.gallery.length - 1 : prev - 1
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // свайпи працюють і з мишкою
  });

  const handleImageClick = (index) => {
    setCurrentSlide(index);
  };

  const updateScrollPercent = () => {
    const el = navRef.current;
    if (el.scrollWidth <= el.clientWidth) {
      setScrollPercent(0);
      return;
    }
    const percent = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    const el = navRef.current;
    el.addEventListener("scroll", updateScrollPercent);
    updateScrollPercent();
    return () => el.removeEventListener("scroll", updateScrollPercent);
  }, []);

  // Додаємо глобальні слухачі для mouseup
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDown) {
        setIsDown(false);
        if (navRef.current) {
          navRef.current.style.cursor = "grab";
        }
      }
    };

    const handleGlobalMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const walk = startX - e.clientX;
      if (navRef.current) {
        navRef.current.scrollLeft = scrollStart + walk;
      }
    };

    if (isDown) {
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("mousemove", handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDown, startX, scrollStart]);

  return (
    <div className="kitchen-slider">
      <div className="kitchen-slider-main-image" {...handlers}>
        <img
          src={currentKitchen.gallery[currentSlide].src}
          alt={`Кухня ${currentSlide + 1}`}
        />
      </div>

      <div
        className="slider-nav"
        ref={navRef}
        onMouseDown={handleMouseDown}
        style={{ cursor: "grab" }}
      >
        {currentKitchen.gallery.map((el, i) => (
          <div
            key={i}
            className={`slider-nav-image ${i === currentSlide ? "active" : ""}`}
            onClick={() => handleImageClick(i)}
          >
            <img
              src={el.src}
              alt={`Мініатюра ${i + 1}`}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {/* Кастомний скролбар */}
      <div className="slider-scrollbar">
        <div
          className="slider-scrollbar-thumb"
          style={{ width: `${scrollPercent + 10}%` }}
        />
      </div>
    </div>
  );
}

// const handleMouseUp = () => {
//   setIsDown(false);
//   navRef.current.style.cursor = 'grab';
// };

// const handleMouseMove = (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const walk = startX - e.clientX;
//   navRef.current.scrollLeft = scrollStart + walk;
// };
