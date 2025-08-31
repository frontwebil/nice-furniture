import { Link } from "react-router-dom";

export function KitchenNavigate({ title }) {
  return (
    <div className="kitchen-navigate text-xxs">
      <Link to={"/"}>Файні меблі / Кухні</Link> / <span className="font-semiBold">{title}</span> 
    </div>
  );
}
