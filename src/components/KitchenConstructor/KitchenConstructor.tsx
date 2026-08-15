import { ButtonCalculation } from "../ButtonСalculation/ButtonCalculation";
import "./style.css";

export function KitchenConstructor() {
  return (
    <section className="kitchen-constructor">
      <div className="container">
        <div className="kitchen-constructor-content">
          <div className="kitchen-constructor-info">
            <h2 className="text-lg font-medium">
              Хочете спочатку{" "}
              <span className="font-bold">спроєктувати кухню самостійно?</span>
            </h2>

            <p>
              Створіть свою кухню у безкоштовному 3D онлайн-конструкторі:
              задайте розміри приміщення, оберіть модулі, фасади та матеріали й
              одразу побачте орієнтовну вартість.
            </p>

            <a
              href="https://planplace.kz/clients/248318371/"
              target="_blank"
              className="kitchen-constructor-button"
            >
              <div className="ButtonСalculation text-sm font-semiBold white">
                Створити кухню в 3D →
              </div>
            </a>
          </div>

          <a
            href="https://planplace.kz/clients/248318371/"
            target="_blank"
            className="kitchen-constructor-image"
          >
            <img src="/kitchen-constructor.webp" alt="3D конструктор кухні" />
          </a>
        </div>
      </div>
    </section>
  );
}
