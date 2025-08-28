import "./HowBornKitchen.css";

export function HowBornKitchen() {
  return (
    <section className="howBornKitchen">
      <div className="container">
        <div className="howBornKitchen-content">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/iTJcwGOfDHY?si=Ml7-b9MYfrbXEnEN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="howBornKitchen-text">
            <img
              src="/howBornKitchen/icon.png"
              alt=""
              className="howBornKitchen-text-icon"
            />
            <p className="text-lg font-medium">
              Від ідеї до реалізації. <br />
              <span className="font-bold">Як народжується</span> кухня!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
