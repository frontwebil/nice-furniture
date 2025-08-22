export function Quiz4({ setNextStep, setQuizResaults, quizResaults }) {
  const handleSelect = (value) => {
    setQuizResaults((prev) => ({ ...prev, area: value }));
    setNextStep((prev) => prev + 1);
  };

  return (
    <div>
      <div className="calculationQuiz-cards-small">
        <div
          className={`calculationQuiz-card-small ${quizResaults.area === "2-5 м²" ? "active" : ""}`}
          onClick={() => handleSelect("2-5 м²")}
        >
          <div className="cirlce"><div></div></div>
          <p className="text-xs font-medium">2-5 м<sup>2</sup></p>
        </div>

        <div
          className={`calculationQuiz-card-small ${quizResaults.area === "5-10 м²" ? "active" : ""}`}
          onClick={() => handleSelect("5-10 м²")}
        >
          <div className="cirlce"><div></div></div>
          <p className="text-xs font-medium">5-10 м<sup>2</sup></p>
        </div>

        <div
          className={`calculationQuiz-card-small ${quizResaults.area === "10-20 м²" ? "active" : ""}`}
          onClick={() => handleSelect("10-20 м²")}
        >
          <div className="cirlce"><div></div></div>
          <p className="text-xs font-medium">10-20 м<sup>2</sup></p>
        </div>

        <div
          className={`calculationQuiz-card-small ${quizResaults.area === "20-50 м²" ? "active" : ""}`}
          onClick={() => handleSelect("20-50 м²")}
        >
          <div className="cirlce"><div></div></div>
          <p className="text-xs font-medium">20-50 м<sup>2</sup></p>
        </div>
      </div>

      <div
        className={`calculationQuiz-card-small ${quizResaults.area === "Хочу замір" ? "active" : ""}`}
        onClick={() => handleSelect("Хочу замір")}
      >
        <div className="cirlce"><div></div></div>
        <p className="text-xs font-medium">Хочу замір</p>
      </div>
    </div>
  );
}
