export function Quiz3({ setNextStep, setQuizResaults, quizResaults }) {
  const handleSelect = (value) => {
    setQuizResaults((prev) => ({ ...prev, stilnc: value }));
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="calculationQuiz-cards">
      <div
        className={`calculationQuiz-card ${
          quizResaults.stilnc === "Термопластик" ? "active" : ""
        }`}
        onClick={() => handleSelect("Термопластик")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/3/1.webp" alt="Термопластик" />
        </div>
        <p className="text-xs font-medium">Термопластик</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.stilnc === "Акрил" ? "active" : ""
        }`}
        onClick={() => handleSelect("Акрил")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/3/2.webp" alt="Акрил" />
        </div>
        <p className="text-xs font-medium">Акрил</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.stilnc === "Кварц" ? "active" : ""
        }`}
        onClick={() => handleSelect("Кварц")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/3/3.webp" alt="Кварц" />
        </div>
        <p className="text-xs font-medium">Кварц</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.stilnc === "Ще не визначились" ? "active" : ""
        }`}
        onClick={() => handleSelect("Ще не визначились")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/1/4.png" alt="?" />
        </div>
        <p className="text-xs font-medium">Ще не визначились</p>
      </div>
    </div>
  );
}
