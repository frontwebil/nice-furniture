export function FasadColor({ currentKitchen }) {
  return (
    <div className="KitchenMaterialsColors-sections">
      <h3 className="text-base">Колір фасадів:</h3>
      <div className="color-sections-container">
        {currentKitchen.fasadColors.map((el, i) => (
          <div className="color-sections-card" key={i}>
            {el.bgImage ? (
              <div
                className="color-sections-card-img"
                style={{ backgroundImage: `url(${el.imgSrc})` }}
              ></div>
            ) : (
              <div
                className="color-sections-card-img"
                style={{ background: `${el.color}` }}
              ></div>
            )}

            <p className="text-xs" style={{ color: "#7C7C7C" }}>
              {el.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
