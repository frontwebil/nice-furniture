import { CorpusColor } from "./CorpusColor";
import { CounterTopColor } from "./CounterTopColor";
import { FasadColor } from "./FasadColor";
import "./KitchenMaterialsColors.css";

export function KitchenMaterialsColors({ currentKitchen }) {
  return (
    <div className="KitchenMaterialsColors">
      <FasadColor currentKitchen={currentKitchen} />
      <CorpusColor />
      <CounterTopColor />
    </div>
  );
}
