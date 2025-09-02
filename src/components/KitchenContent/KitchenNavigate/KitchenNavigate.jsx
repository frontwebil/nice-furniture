import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export function KitchenNavigate({ title }) {
  return (
    <Link to={'/'} className="kitchen-navigate text-sm">
      <FaLongArrowAltLeft />
      На Головну
    </Link>
  );
}
