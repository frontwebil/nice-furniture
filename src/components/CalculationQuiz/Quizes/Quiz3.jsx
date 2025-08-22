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
        <p className="text-xs font-medium">Термопластик</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.stilnc === "Акрил" ? "active" : ""
        }`}
        onClick={() => handleSelect("Акрил")}
      >
        <p className="text-xs font-medium">Акрил</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.stilnc === "Кварц" ? "active" : ""
        }`}
        onClick={() => handleSelect("Кварц")}
      >
        <p className="text-xs font-medium">Кварц</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.stilnc === "Ще не визначились" ? "active" : ""
        }`}
        onClick={() => handleSelect("Ще не визначились")}
      >
        <p className="text-xs font-medium">Ще не визначились</p>
      </div>
    </div>
  );
}
