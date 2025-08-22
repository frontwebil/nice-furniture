export function Quiz2({ setNextStep, setQuizResaults, quizResaults }) {
  const handleSelect = (value) => {
    setQuizResaults((prev) => ({ ...prev, fasad: value }));
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="calculationQuiz-cards">
      <div
        className={`calculationQuiz-card ${
          quizResaults.fasad === "Фарбований МДФ" ? "active" : ""
        }`}
        onClick={() => handleSelect("Фарбований МДФ")}
      >
        <p className="text-xs font-medium">Фарбований МДФ</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.fasad === "Ламінований ДСП" ? "active" : ""
        }`}
        onClick={() => handleSelect("Ламінований ДСП")}
      >
        <p className="text-xs font-medium">Ламінований ДСП</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.fasad === "Акриловий МДФ" ? "active" : ""
        }`}
        onClick={() => handleSelect("Акриловий МДФ")}
      >
        <p className="text-xs font-medium">Акриловий МДФ</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.fasad === "Ще не визначились" ? "active" : ""
        }`}
        onClick={() => handleSelect("Ще не визначились")}
      >
        <p className="text-xs font-medium">Ще не визначились</p>
      </div>
    </div>
  );
}
