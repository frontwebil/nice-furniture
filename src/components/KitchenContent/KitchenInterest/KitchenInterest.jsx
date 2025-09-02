import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { catalog } from "../../../data/catalog";
import { useState } from "react";
import { CatalogCard } from "../../Catalog/CatalogCard";
import { useSwipeable } from "react-swipeable";

export function KitchenInterest() {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(catalog.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  const nextPage = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  // свайпи
  const handlers = useSwipeable({
    onSwipedLeft: nextPage,   // свайп вліво -> наступна сторінка
    onSwipedRight: prevPage,  // свайп вправо -> попередня сторінка
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // щоб працювало і мишею на десктопі
  });

  return (
    <div className="kitchen-interest">
      <div className="interest-catalog-cards" {...handlers}>
        {catalog.slice(start, end).map((kitchen, i) => (
          <CatalogCard key={i} kitchen={kitchen} />
        ))}
      </div>

      <div className="buttons-kitchen-interest">
        <button
          className="interest-arrow-prev"
          onClick={prevPage}
          disabled={page === 0}
        >
          <MdArrowBackIos className="interest-arrow-icon" fill="#fff" />
        </button>

        <div className="circles">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`circle ${i === page ? "active" : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>

        <button
          className="interest-arrow-next"
          onClick={nextPage}
          disabled={page === totalPages - 1}
        >
          <MdArrowForwardIos className="interest-arrow-icon" fill="#fff" />
        </button>
      </div>
    </div>
  );
}
