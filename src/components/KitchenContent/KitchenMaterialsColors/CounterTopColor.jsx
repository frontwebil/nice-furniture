import { counterTopColor } from "../../../data/counterTopColor";

export function CounterTopColor() {
  return (
    <div className="CounterTopColor-sections">
      <h3 className="text-base">Колір стільниць:</h3>
      <h4 className="text-sm">
        Стільниці ріжуться в необхідний для клієнта розмір.
      </h4>
      <div className="CounterTopColor-color-sections-container">
        <div className="">
          <h4 className="text-xs font-semiBold">Взірці стільниць 28</h4>
          <div className="CounterTopColor-left-container">
            {counterTopColor.colorSmall.map((el, i) => (
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
        <div className="">
          <h4 className="text-xs font-semiBold">Взірці стільниць 38</h4>
          <div className="CounterTopColor-right-container">
            {counterTopColor.colorNormal.map((el, i) => (
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
      </div>
    </div>
  );
}
