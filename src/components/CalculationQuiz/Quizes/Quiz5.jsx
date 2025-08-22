export function Quiz5({ setNextStep, setQuizResaults, quizResaults }) {
  const handleSelect = (value) => {
    setQuizResaults((prev) => ({ ...prev, time: value }));
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="calculationQuiz-cards-with-image">
      <div className="calculationQuiz-cards-with-image-column">
        <div
          className={`calculationQuiz-card-small ${quizResaults.time === "Поки цікавлюсь" ? "active" : ""}`}
          onClick={() => handleSelect("Поки цікавлюсь")}
        >
          <div className="cirlce"><div></div></div>
          <p className="text-xs font-medium">Поки цікавлюсь</p>
        </div>

        <div
          className={`calculationQuiz-card-small ${quizResaults.time === "Наступного місяця" ? "active" : ""}`}
          onClick={() => handleSelect("Наступного місяця")}
        >
          <div className="cirlce"><div></div></div>
          <p className="text-xs font-medium">Наступного місяця</p>
        </div>

        <div
          className={`calculationQuiz-card-small ${quizResaults.time === "В цьому місяці" ? "active" : ""}`}
          onClick={() => handleSelect("В цьому місяці")}
        >
          <div className="cirlce"><div></div></div>
          <p className="text-xs font-medium">В цьому місяці</p>
        </div>
      </div>
      <img src="/quiz/5/main.png" alt="" className="calculationQuiz-cards-image" />
    </div>
  );
}
