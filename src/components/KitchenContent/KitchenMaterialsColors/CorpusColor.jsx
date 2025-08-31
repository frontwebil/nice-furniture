import { corpusColor } from "../../../data/corpusColors";

export function CorpusColor() {
  return (
    <div className="KitchenMaterialsColors-sections">
      <h3 className="text-base">Колір корпусу:</h3>
      <div className="color-sections-container">
        {corpusColor.map((el, i) => (
          <div className="color-sections-card" key={i}>
            <div
              className="color-sections-card-img"
              style={{ backgroundImage: `url(${el.imgSrc})` }}
            ></div>
            <p className="text-xs" style={{ color: "#7C7C7C" }}>
              {el.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
