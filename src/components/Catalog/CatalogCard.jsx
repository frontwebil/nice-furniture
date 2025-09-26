import { Link } from "react-router-dom";

export function CatalogCard({ kitchen }) {
  return (
    <Link to={`/kitchen/${kitchen.id}`} className="catalog-card">
      <div className="">
        <div className="catalog-card-img">
          <img src={kitchen.imgSrc} alt="" />
          {kitchen.isBest && <p className="card-img-sticker">BEST</p>}
        </div>
        <p className="catalog-card-title">кухня {kitchen.title}</p>
      </div>
      <p className="catalog-card-price">{kitchen.price} <span className="m-p">грн./м.п.</span></p>
    </Link>
  );
}
