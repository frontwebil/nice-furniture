import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import "./Testimonials.css";
import { TestimonialsSlider } from "./TestimonialsSlider";
import { ButtonCalculation } from "../ButtonСalculation/ButtonCalculation";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideSrc, setCurrentSlideSrc] = useState(testimonials[0]);
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
    setCurrentSlideSrc(testimonials[id]);
    setIsOpenSlider(true);
  };

  const closeSlider = () => {
    setIsOpenSlider(false);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % testimonials.length;
    setCurrentSlide(newIndex);
    setCurrentSlideSrc(testimonials[newIndex]);
  };

  const prevSlide = () => {
    const newIndex =
      (currentSlide - 1 + testimonials.length) % testimonials.length;
    setCurrentSlide(newIndex);
    setCurrentSlideSrc(testimonials[newIndex]);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title text-xl font-bold">
          770+ відгуків на Google картах <br />
          <span className="font-medium">
            з оцінкою 4,4 - Наша головна нагорода
          </span>
        </h2>
        <div className="main-image">
          <img src="/testimonials/main.webp" alt="" />
        </div>
        {isOpenSlider && (
          <TestimonialsSlider
            currentSlideSrc={currentSlideSrc}
            closeSlider={closeSlider}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        )}
        <div className="testimonials-card-grid">
          {testimonials.map((el, id) => (
            <img src={`${el}`} key={id} onClick={() => handleClickImage(id)} />
          ))}
        </div>
        <div className="button-get-cons-testimonials">
          <ButtonCalculation text={"Зв’язатись з менеджером"} />
        </div>
      </div>
    </section>
  );
}
