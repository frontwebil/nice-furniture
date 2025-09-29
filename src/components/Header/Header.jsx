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
              <a href="https://www.instagram.com/fayni.mebli?igsh=cnRlcGhvbDloYmoy">
                <img
                  src="/header/ins.svg"
                  alt=""
                  className="header-social-icon"
                />
              </a>
              <a href="tel:(068) 220-22-91">
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
        {/* <Link
          to="/#catalog"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          Наші найкращі моделі
        </Link>
        <Link
          to="/#seeMore"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          Про компанію
        </Link>
        <Link
          to="/#howBorn"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          Як народжується кухня
        </Link>
        <Link
          to="/#testimonials"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          Відгуки про нашу роботу
        </Link>
        <Link
          to="/#quiz"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          Розрахуйте ціну своєї кухні
        </Link>
        <Link
          to="/#about-us"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          Про нас - честно і без прикрас
        </Link>
        <Link
          to="/#partners"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          наші замовники
        </Link>
        <Link
          to="/#questions"
          className="text-base font-medium nav-links"
          onClick={() => setIsOpenBurger(false)}
        >
          найчастіші питання
        </Link> */}
        <div className="mobile-header-column">
          <a href="tel:(044) 209-08-08" className="font-semiBold">
            (044) 209-08-08
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
            <a href="https://www.facebook.com/faynimebli/">
              <img
                src="/footer/fb.svg"
                alt=""
                className="footer-links-social-icon"
              />
            </a>
            <a href="https://www.instagram.com/fayni.mebli?igsh=cnRlcGhvbDloYmoy">
              <img
                src="/footer/inst.svg"
                alt=""
                className="footer-links-social-icon"
              />
            </a>
            <a href="https://www.youtube.com/user/faynimebli">
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
