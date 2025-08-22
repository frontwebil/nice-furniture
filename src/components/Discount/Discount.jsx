import { ButtonCalculation } from "../ButtonСalculation/ButtonCalculation";
import "./Discount.css"

export function Discount() {
  return (
    <section className="discount">
      <div className="container">
                  <h3 className="font-bold text-lg discount-mobile-text">
            <span className="text-xl font-bold" style={{ color: "#DD4631" }}>
              Акція!
            </span>
            <br />
            При купівлі кухні - посудомийна машина в подарунок.
          </h3>
        <div className="discount-img-container">
          <img src="/discount/main.png" alt="" />
        </div>
        <div className="discount-text">
          <h3 className="font-bold text-lg discount-normal-text">
            <span className="text-xl font-bold" style={{ color: "#DD4631" }}>
              Акція!
            </span>
            <br />
            При купівлі кухні - посудомийна машина в подарунок.
          </h3>
          <div className="discount-end-month">
            <img src="/discount/hourglass.svg" alt="" />
            <p className="text-base font-medium">Акція діє до кінця місяця</p>
          </div>
          <p className="text-xs font-medium">*деталі уточнюйте у менеджера</p>
          <div className="discount-get-cons-button">
            <ButtonCalculation text={"Зв’язатись з менеджером"}/>
          </div>
        </div>
      </div>
    </section>
  );
}
