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
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/2/1.webp" alt="Фарбований МДФ" />
        </div>
        <p className="text-xs font-medium">Фарбований МДФ</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.fasad === "Ламінований ДСП" ? "active" : ""
        }`}
        onClick={() => handleSelect("Ламінований ДСП")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/2/2.webp" alt="Ламінований ДСП" />
        </div>
        <p className="text-xs font-medium">Ламінований ДСП</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.fasad === "Акриловий МДФ" ? "active" : ""
        }`}
        onClick={() => handleSelect("Акриловий МДФ")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/2/3.webp" alt="Акриловий МДФ" />
        </div>
        <p className="text-xs font-medium">Акриловий МДФ</p>
      </div>

      <div
        className={`calculationQuiz-card ${
          quizResaults.fasad === "Ще не визначились" ? "active" : ""
        }`}
        onClick={() => handleSelect("Ще не визначились")}
      >
        <div className="calculationQuiz-card-img-container">
          <img src="/quiz/1/4.png" alt="" />
        </div>
        <p className="text-xs font-medium">Ще не визначились</p>
      </div>
    </div>
  );
}
