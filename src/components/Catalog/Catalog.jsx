import "./Catalog.css";
import { catalog } from "../../data/catalog";
import { CatalogCard } from "./CatalogCard";
import { useState } from "react";
export function Catalog() {
  const [cardPerView, setCardPerView] = useState(8);

  return (
    <section className="catalog">
      <div className="container">
        <h3 className="text-lg">
          Наші найкращі моделі, які підкорили серця вже більш ніж{" "}
          <span className="font-semiBold">1500 людей</span>
        </h3>
        <div className="catalog-cards">
          {catalog.slice(0, cardPerView).map((kitchen, i) => (
            <CatalogCard key={i} kitchen={kitchen} />
          ))}
        </div>

        {cardPerView < catalog.length && (
          <button
            className="catalog-see-more-button"
            onClick={() => setCardPerView((prev) => prev + 4)} // додає по 4 картки
          >
            Показати ще
          </button>
        )}
      </div>
    </section>
  );
}
