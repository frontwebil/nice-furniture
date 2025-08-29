import { useFormContext } from "../../FormContext";
import "./ButtonСalculation.css";

export function ButtonCalculation({ text }) {
  const { openForm } = useFormContext();

  return (
    <>
      <div
        className="ButtonСalculation text-sm font-semiBold white"
        onClick={() => openForm()}
      >
        {text}
      </div>
    </>
  );
}
