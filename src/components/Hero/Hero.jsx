import "./Hero.css";
import { ButtonCalculation } from "../ButtonСalculation/ButtonCalculation";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <h1 className="text-xxl font-medium">
          <span className="font-bold">Кухня Вашої мрії</span> <br />
          під ваші розміри за ціною стандартної
        </h1>
        <div className="hero-advantages">
          <div className="hero-advantages-row">
            <div className="hero-circle"></div>
            <p className="text-base">
              <span className="font-bold">Безкоштовний</span>
              <br /> виїзд замірника
            </p>
          </div>
          <div className="hero-advantages-row">
            <div className="hero-circle"></div>
            <p className="text-base">
              <span className="font-bold">Доставка</span>
              <br /> та монтаж
            </p>
          </div>
          <div className="hero-advantages-row">
            <div className="hero-circle"></div>
            <p className="text-base">
              <span className="font-bold">Гарантія</span>
              <br /> 5 років
            </p>
          </div>
        </div>
        <div className="hero-button-container">
          <ButtonCalculation text={"Отримати розрахунок"} />
        </div>
        <div className="hero-discount">
          <div className="hero-discount-row">
            <img
              src="/hero/discount.png"
              alt=""
              className="hero-discount-row-img"
            />
            <div className="hero-discount-text text-base font-bold">
              {" "}
              <span style={{ color: "#DD4631" }}>АКЦІЯ!</span> Посудомийка в
              подарунок лише цього місяця <br />
            <p className="text-xs font-semiBold">
              *деталі акції уточнюйте у менеджера
            </p>
            </div>
          </div>
          <div className="hero-kitchens">
            <div className="hero-kitchen">
              <img src="/hero/kitchen-1.png" alt="" />
              <div className="font-sm white font-semiBold">
                <span className="font-xxxs white font-medium">ціни від</span>
                <br />
                9000 грн./м.п.
              </div>
            </div>
            <div className="hero-kitchen">
              <img src="/hero/kitchen-2.png" alt="" />
              <div className="font-sm white font-semiBold">
                <span className="font-xxxs white font-medium">ціни від</span>
                <br />
                15000 грн./м.п.
              </div>
            </div>
            <div className="hero-kitchen hero-kithchen-mobile-hidden">
              <img src="/hero/kitchen-3.png" alt="" />
              <div className="font-sm white font-semiBold">
                <span className="font-xxxs white font-medium">ціни від</span>
                <br />
                6500 грн./м.п.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
