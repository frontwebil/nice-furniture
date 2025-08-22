import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  return (
    <header className={`${isOpenBurger && "active"}`}>
      <div className={`header-bg ${isOpenBurger && "active"}`}>
        <div className={`header-container container`}>
          <img src="/logo.png" alt="" />
          <div className="header-right">
            <div className="header-social-icons">
              <a href="">
                <img
                  src="/header/ins.svg"
                  alt=""
                  className="header-social-icon"
                />
              </a>
              <a href="">
                <img
                  src="/header/tel.svg"
                  alt=""
                  className="header-social-icon"
                />
              </a>
              <a
                href="tel:+38 (097) 459-75-57"
                className="telephone text-md font-medium"
              >
                +38 (097) 459-75-57
              </a>
            </div>
            <div
              className={`burger-button ${isOpenBurger && "active"}`}
              onClick={() => {
                setIsOpenBurger(!isOpenBurger);
              }}
            >
              <div className="burger-line"></div>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`burger-menu ${isOpenBurger && "active"}`}>
        <a href="#" className="text-base font-medium">
          Наші найкращі моделі
        </a>
        <a href="#" className="text-base font-medium">
          Про компанію
        </a>
        <a href="#" className="text-base font-medium">
          Як народжується кухня
        </a>
        <a href="#" className="text-base font-medium">
          Відгуки про нашу роботу
        </a>
        <a href="#" className="text-base font-medium">
          Розрахуйте ціну своєї кухні
        </a>
        <a href="#" className="text-base font-medium">
          Про нас - честно і без прикрас
        </a>
        <a href="#" className="text-base font-medium">
          наші замовники
        </a>
        <a href="#" className="text-base font-medium">
          найчастіші питання
        </a>
        <div className="mobile-header-column">
          <a href="tel:+380974597557" className="font-semiBold">+38 (097) 459-75-57</a>
          <a href="tel:0800337592" className="font-semiBold">0800 33 75 92</a>
          <p>безкоштовно з усіх телефонів</p>
          <div className="footer-links-social">
            <a href="">
              <img
                src="/footer/fb.svg"
                alt=""
                className="footer-links-social-icon"
              />
            </a>
            <a href="">
              <img
                src="/footer/inst.svg"
                alt=""
                className="footer-links-social-icon"
              />
            </a>
            <a href="">
              <img
                src="/footer/yt.svg"
                alt=""
                className="footer-links-social-icon"
              />
            </a>
            <a href="">
              <img
                src="/footer/tg.svg"
                alt=""
                className="footer-links-social-icon"
              />
            </a>
            <a href="">
              <img
                src="/footer/viber.svg"
                alt=""
                className="footer-links-social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
