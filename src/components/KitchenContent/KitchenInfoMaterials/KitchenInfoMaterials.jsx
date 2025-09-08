import "./KitchenInfoMaterials.css";

export function KitchenInfoMaterials({ currentKitchen }) {
  return (
    <div className="kitchen-info-materials">
      <div className="kitchen-info-materials-column">
        <div className="kitchen-info-materials-column-title text-xs">
          Корпус
        </div>
        <p
          className="gray text-xs"
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: currentKitchen.materials }}
        />
      </div>
      <div className="kitchen-info-materials-column">
        <div className="kitchen-info-materials-column-title text-xs">
          Фурнітура
        </div>
        <p
          className="gray text-xs"
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: currentKitchen.furniture }}
        />
      </div>
      <div className="kitchen-info-materials-column">
        <div className="kitchen-info-materials-column-title text-xs">
          Фасади
        </div>
        <p
          className="gray text-xs"
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: currentKitchen.colorEdgesFacad }}
        />
      </div>
    </div>
  );
}
