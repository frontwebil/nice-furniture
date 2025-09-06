import "./SeeMore.css"

export function SeeMore() {
  return (
    <section className="seeMore" id="seeMore">
      <div className="container">
        <div className="seeMore-content">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/iTJcwGOfDHY?si=Ml7-b9MYfrbXEnEN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="seeMore-text">
            <img src="/seeMore/icon.png" alt="" className="seeMore-text-icon"/>
            <p className="text-lg font-medium"><span className="font-bold">Тисніть на відео та дізнайтеся за дві хвилини</span> як швидко та економно отримати кухню своєї мрії.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
