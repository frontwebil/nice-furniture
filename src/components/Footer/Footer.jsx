import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="footer-links">
          <a href="https://share.google/sXr6XXfJFFilGf57y">
            <p className="text-base font-semiBold">
              м. Київ, вул. Святошинська, 1
            </p>
          </a>
          <a href="tel:+380974597557">
            <p className="text-base font-semiBold">+38 (097) 459-75-57</p>
          </a>
          <a href="tel:0800 33 75 92">
            <p className="text-base font-semiBold">0800 33 75 92</p>
            <p className="text-xxs">безкоштовно з усіх телефонів</p>
          </a>
          <a href="https://fayni-mebli.com/">
            <p className="text-base font-semiBold">www.fayni-mebli.com.ua </p>
            <p className="text-xxs">наш вебсайт</p>
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
