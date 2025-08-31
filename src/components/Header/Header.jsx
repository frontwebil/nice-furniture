import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className={`${isOpenBurger && "active"}`}>
      <div className={`header-bg ${isOpenBurger && "active"}`}>
        <div className={`header-container container`}>
          <Link to={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
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
              {width < 751 ? (
                <>
                  <img
                    src="/header/whatsup.svg"
                    alt=""
                    style={{ display: isOpenBurger ? "none" : "block" }}
                  />
                  <>
                    <div
                      className="burger-line"
                      style={{ display: isOpenBurger ? "block" : "none" }}
                    ></div>
                    <div
                      className="burger-line"
                      style={{ display: isOpenBurger ? "block" : "none" }}
                    ></div>
                  </>
                </>
              ) : (
                <>
                  <div className="burger-line"></div>
                  <div className="burger-line"></div>
                  <div className="burger-line"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`burger-menu ${isOpenBurger && "active"}`}>
        <a href="#" className="text-base font-medium nav-links">
          Наші найкращі моделі
        </a>
        <a href="#" className="text-base font-medium nav-links">
          Про компанію
        </a>
        <a href="#" className="text-base font-medium nav-links">
          Як народжується кухня
        </a>
        <a href="#" className="text-base font-medium nav-links">
          Відгуки про нашу роботу
        </a>
        <a href="#" className="text-base font-medium nav-links">
          Розрахуйте ціну своєї кухні
        </a>
        <a href="#" className="text-base font-medium nav-links">
          Про нас - честно і без прикрас
        </a>
        <a href="#" className="text-base font-medium nav-links">
          наші замовники
        </a>
        <a href="#" className="text-base font-medium nav-links">
          найчастіші питання
        </a>
        <div className="mobile-header-column">
          <a
            href="https://share.google/sXr6XXfJFFilGf57y"
            className="text-base font-semiBold"
          >
            м. Київ, вул. Святошинська, 1
          </a>
          <a href="tel:+380974597557" className="font-semiBold">
            +38 (097) 459-75-57
          </a>
          <a href="tel:0800337592" className="font-semiBold">
            0800 33 75 92
          </a>
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
