import "./KitchenInfoMaterials.css";

export function KitchenInfoMaterials({ currentKitchen }) {
  return (
    <div className="kitchen-info-materials">
      <div className="kitchen-info-materials-column">
        <div className="kitchen-info-materials-column-title text-xs">Материалы</div>
        <p className="gray text-xs" style={{ whiteSpace: "pre-wrap" }}>
          {currentKitchen.materials}
        </p>
      </div>
      <div className="kitchen-info-materials-column">
        <div className="kitchen-info-materials-column-title text-xs">Фурнитура</div>
        <p className="gray text-xs" style={{ whiteSpace: "pre-wrap" }}>
          {currentKitchen.furniture}
        </p>
      </div>
      <div className="kitchen-info-materials-column">
        <div className="kitchen-info-materials-column-title text-xs">Цвета кромки фасадов</div>
        <p className="gray text-xs" style={{ whiteSpace: "pre-wrap" }}>
          {currentKitchen.colorEdgesFacad}
        </p>
      </div>
    </div>
  );
}
