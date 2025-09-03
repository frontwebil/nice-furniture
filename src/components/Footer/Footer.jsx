import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="footer-links">
          <a href="tel:(044) 490-00-00">
            <p className="text-base font-semiBold">(044) 490-00-00</p>
          </a>
          <a href="tel:(068) 220-22-91">
            <p className="text-base font-semiBold">(068) 220-22-91</p>
          </a>
          <a href="https://share.google/sXr6XXfJFFilGf57y">
            <p className="text-base font-semiBold">
              м. Київ, вул. Святошинська, 1
            </p>
          </a>
          <div className="footer-icons-wrapper">
              <p className="text-base">Тисніть на іконки:</p>
            <div className="pop-up-icons" style={{ margin: "0px" }}>

              <a href="https://msng.link/o?+380682202291=vi">
                <img src="/icons/vb.svg" alt="" className="icon-social" />
              </a>
              <a href="https://t.me/FayniKuhni1">
                <img src="/icons/tg.svg" alt="" className="icon-social" />
              </a>
            </div>
          </div>
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
    </footer>
  );
}
