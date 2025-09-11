export function Quiz1({ setNextStep, setQuizResaults, quizResaults }) {
  const handleSelect = (value) => {
    setQuizResaults((prev) => ({ ...prev, type: value }));
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="calculationQuiz-cards">
      <div
        className={`calculationQuiz-card ${
          quizResaults.type === "Кутова" ? "active" : ""
        }`}
        onClick={() => handleSelect("Кутова")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/1/1.webp" alt="Кутова" />
        </div>
        <p className="text-xs font-medium">Кутова</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.type === "П-подібна" ? "active" : ""
        }`}
        onClick={() => handleSelect("П-подібна")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/1/2.webp" alt="П-подібна" />
        </div>
        <p className="text-xs font-medium">П-подібна</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.type === "Пряма" ? "active" : ""
        }`}
        onClick={() => handleSelect("Пряма")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/1/3.webp" alt="Пряма" />
        </div>
        <p className="text-xs font-medium">Пряма</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.type === "Ще не визначились" ? "active" : ""
        }`}
        onClick={() => handleSelect("Ще не визначились")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/1/4.png" alt="Ще не визначились" />
        </div>
        <p className="text-xs font-medium">Ще не визначились</p>
      </div>
    </div>
  );
}
