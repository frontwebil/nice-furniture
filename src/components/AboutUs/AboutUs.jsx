import "./AboutUs.css"

export function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-main-image">
          <img src="/about-us/main.png" alt="" />
        </div>
        <div className="about-us-content">
          <h3 className="text-lg">
            <span className="font-bold">Про нас</span> - честно і без прикрас
          </h3>
          <div className="about-us-advantages-column">
            <div className="about-us-advantages">
              <h3 className="about-us-advantages-title">01</h3>
              <p className="text-base">
                <span className="font-bold">Компанія Файні Меблі</span> вже
                понад 20 років створюємо кухні під замовлення по всій Україні.{" "}
              </p>
            </div>
            <div className="about-us-advantages">
              <h3 className="about-us-advantages-title">02</h3>
              <p className="text-base">
                <span className="font-bold">Наша мета</span> - зробити якісну та
                стильну кухню доступною кожній родині.
              </p>
            </div>
            <div className="about-us-advantages">
              <h3 className="about-us-advantages-title">03</h3>
              <p className="text-base">
                <span className="font-bold">Ми не продаємо обіцянки.</span> Ми
                продаємо результат.{" "}
              </p>
            </div>
          </div>
          <div className="about-us-images">
            <div className="about-us-image">
              <img src="/about-us/1.png" alt="" />
            </div>
            <div className="about-us-image">
              <img src="/about-us/2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
