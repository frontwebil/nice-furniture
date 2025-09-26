import "./HowBornKitchen.css";

export function HowBornKitchen() {
  return (
    <section className="howBornKitchen" id="howBorn">
      <div className="container">
        <div className="howBornKitchen-content">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/3z0VkZg1e_Q?si=wkevhaZgLc7u39A5"
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
              <span className="font-bold">Як народжується</span> наша кухня за один день!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
