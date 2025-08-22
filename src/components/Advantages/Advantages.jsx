import { advantagesData } from "../../data/advantages";
import { ButtonCalculation } from "../ButtonСalculation/ButtonCalculation";
import "./Advantages.css";
import { AdvantagesCard } from "./AdvantagesCard";

export function Advantages() {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages-title">
          <h2 className="text-lg font-medium">
            <span className="font-bold">Файні меблі</span> - компанія, що дарує
            естетичну насолоду та душевний спокій.
          </h2>
          <div className="advantages-button-container">
            <ButtonCalculation
              text={"Замовити безкоштовний замір та 3D візуалізацію"}
            />
          </div>
        </div>
        <div className="advantages-cards">
          {advantagesData.map((el, id) => (
            <AdvantagesCard
              text={el.text}
              img={el.image}
              title={el.title}
              key={id}
            />
          ))}
        </div>
        <div className="advantages-button-container-mobile">
          <ButtonCalculation
            text={"Замовити безкоштовний замір та 3D візуалізацію"}
          />
        </div>
      </div>
    </section>
  );
}
