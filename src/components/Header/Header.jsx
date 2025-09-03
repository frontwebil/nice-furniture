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
                href="tel:(068) 220-22-91"
                className="telephone text-md font-medium"
              >
                (068) 220-22-91
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
          <a href="tel:0444900000" className="font-semiBold">
            (044) 490-00-00
          </a>
          <a href="tel:0682202291" className="font-semiBold">
            (068) 220-22-91
          </a>
          <p className="text-base font-semiBold">Тисніть на іконки:</p>
          <div className="pop-up-icons">
            <a href="https://msng.link/o?+380682202291=vi">
              <img src="/icons/vb.svg" alt="" className="icon-social" />
            </a>
            <a href="https://t.me/FayniKuhni1">
              <img src="/icons/tg.svg" alt="" className="icon-social" />
            </a>
          </div>
          <a
            href="https://share.google/sXr6XXfJFFilGf57y"
            className="text-base font-semiBold"
          >
            м. Київ, вул. Святошинська, 1
          </a>
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
          </div>
        </div>
      </div>
    </header>
  );
}
