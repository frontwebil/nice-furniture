import { useEffect, useState } from "react";
import { works } from "../../data/works";
import { WorksSlider } from "./WorksSlider";
import "./Works.css";

const PREVIEW_STEP = 8;

export function Works() {
  const [visibleCount, setVisibleCount] = useState(PREVIEW_STEP);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpenSlider, setIsOpenSlider] = useState(false);

  useEffect(() => {
    if (isOpenSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup на випадок розмонтажу компонента
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenSlider]);

  const handleClickImage = (id) => {
    setCurrentSlide(id);
    setIsOpenSlider(true);
  };

  const closeSlider = () => {
    setIsOpenSlider(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + works.length) % works.length);
  };

  const visibleWorks = works.slice(0, visibleCount);

  return (
    <section className="works" id="works">
      <div className="container">
        <h2 className="testimonials-title text-xl font-bold">
          Наші роботи
          <br />
          <span className="font-medium">Кухні, які ми вже встановили</span>
        </h2>
        <div className="works-card-grid">
          {visibleWorks.map((src, id) => (
            <img
              src={src}
              alt={`Наша робота ${id + 1}`}
              key={src}
              loading="lazy"
              onClick={() => handleClickImage(id)}
            />
          ))}
        </div>
        {visibleCount < works.length && (
          <div
            className="works-show-more text-sm font-semiBold white"
            onClick={() => setVisibleCount((prev) => prev + PREVIEW_STEP)}
          >
            Переглянути більше робіт
          </div>
        )}
        {isOpenSlider && (
          <WorksSlider
            currentSlideSrc={works[currentSlide]}
            closeSlider={closeSlider}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        )}
      </div>
    </section>
  );
}
