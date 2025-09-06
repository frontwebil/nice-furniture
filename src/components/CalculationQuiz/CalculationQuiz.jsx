import { useState } from "react";
import "./CalculationQuiz.css";
import { Quiz1 } from "./Quizes/Quiz1";
import { Quiz2 } from "./Quizes/Quiz2";
import { Quiz3 } from "./Quizes/Quiz3";
import { Quiz4 } from "./Quizes/Quiz4";
import { Quiz5 } from "./Quizes/Quiz5";
import { Quiz6 } from "./Quizes/Quiz6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Quiz7 } from "./Quizes/Quiz7";

export function CalculationQuiz() {
  const [currentStep, setNextStep] = useState(0);
  const [quizResaults, setQuizResaults] = useState({
    type: null,
    fasad: null,
    stilnc: null,
    area: null,
    time: null,
    name: null,
    tel: null,
  });

  const nextQuiz = () => {
    setNextStep(currentStep + 1);
  };

  const prevQuiz = () => {
    setNextStep(currentStep - 1);
  };

  const canNext = () => {
    const keys = ["type", "fasad", "stilnc", "area", "time", "name", "tel"];
    return !!quizResaults[keys[currentStep]]; // повертає true, якщо значення вибране, і false інакше
  };

  return (
    <section className="calculationQuiz" id="quiz">
      <div className="container">
        <h2 className="text-lg font-medium" style={{ textAlign: "center" }}>
          <span className="font-bold">Розрахуйте ціну</span> своєї кухні
        </h2>
        <div className="calculationQuiz-content">
          {currentStep < 6 && (
            <>
              <button
                className="quiz-arrow-prev"
                disabled={currentStep === 0}
                onClick={() => prevQuiz()}
              >
                <MdArrowBackIos
                  className="quiz-arrow-icon"
                  style={{ fill: "#fff" }}
                />
              </button>
              <button
                className="quiz-arrow-next"
                disabled={!canNext()}
                onClick={() => nextQuiz()}
              >
                <MdArrowForwardIos
                  className="quiz-arrow-icon"
                  style={{ fill: "#fff" }}
                />
              </button>
            </>
          )}

          {currentStep < 6 && (
            <div className="calculationQuiz-content-top">
              <div className="calculationQuiz-content-top-lines">
                <div
                  className="calculationQuiz-content-top-line-actual"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm font-medium">
                {currentStep === 0 && "Який тип кухні Вас цікавить?"}
                {currentStep === 1 && "Оберіть тип фасаду"}
                {currentStep === 2 && "Оберіть тип стільниці"}
                {currentStep === 3 && "Вкажіть площу вашої кухні"}
                {currentStep === 4 && "На коли потрібна кухня?"}
                {currentStep === 5 && "Як з Вами зв’язатися?"}
              </p>
            </div>
          )}

          {currentStep === 0 && (
            <Quiz1
              quizResaults={quizResaults}
              setQuizResaults={setQuizResaults}
              setNextStep={setNextStep}
            />
          )}
          {currentStep === 1 && (
            <Quiz2
              quizResaults={quizResaults}
              setQuizResaults={setQuizResaults}
              setNextStep={setNextStep}
            />
          )}
          {currentStep === 2 && (
            <Quiz3
              quizResaults={quizResaults}
              setQuizResaults={setQuizResaults}
              setNextStep={setNextStep}
            />
          )}
          {currentStep === 3 && (
            <Quiz4
              quizResaults={quizResaults}
              setQuizResaults={setQuizResaults}
              setNextStep={setNextStep}
            />
          )}
          {currentStep === 4 && (
            <Quiz5
              quizResaults={quizResaults}
              setQuizResaults={setQuizResaults}
              setNextStep={setNextStep}
            />
          )}
          {currentStep === 5 && (
            <Quiz6
              setQuizResaults={setQuizResaults}
              setNextStep={setNextStep}
              quizResaults={quizResaults}
            />
          )}
          {currentStep === 6 && (
            <Quiz7
              setQuizResaults={setQuizResaults}
              setNextStep={setNextStep}
              quizResaults={quizResaults}
            />
          )}
        </div>
      </div>
    </section>
  );
}
