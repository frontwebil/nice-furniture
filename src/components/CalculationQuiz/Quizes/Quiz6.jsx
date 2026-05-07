import emailjs from "@emailjs/browser";
import axios from "axios";
import { useState } from "react";


export function Quiz6({ setNextStep, setQuizResaults, quizResaults }) {
  const [loading, setLoading] = useState(false);
  const sendQuizResaults = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios.post(
      "https://kuhni-back.vercel.app/api/sendMessageToTelegram",
      {
        name: quizResaults.name,
        phone: quizResaults.tel,
        quizResaults
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    emailjs
      .send(
        "service_g69zpkw",
        "template_l4353a8",
        {
          emailTitle: "Новий запит на консультацію (Опитувальник)",
          messagge: `
          👤 Ім’я: ${quizResaults.name}
          📞 Телефон: +380${quizResaults.tel}

          📌 Тип: ${quizResaults.type}
          🏠 Фасад: ${quizResaults.fasad}
          🎨 Стиль: ${quizResaults.stilnc}
          📐 Площа: ${quizResaults.area}
          ⏳ Термін: ${quizResaults.time}
          `,
        },
        "CnzOwsFQR0Hu_DO7p",
      )
      .then(() => {
        setLoading(false);
        setNextStep(6);
      })
      .catch((error) => {
        setLoading(false);
        alert("Помилка: " + error.text);
      });
  };

  return (
    <div className="">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <form className="calculationQuiz-cards-small" onSubmit={sendQuizResaults}>
        <input
          type="text"
          className="calculationQuiz-card-small-input"
          placeholder="Ім'я"
          value={!quizResaults.name ? "" : quizResaults.name}
          onChange={(e) => {
            setQuizResaults({ ...quizResaults, name: e.target.value });
          }}
          required
        />
        <div className="calculationQuiz-card-small-discount">Знижка 5%</div>
        <input
          type="tel"
          className="calculationQuiz-card-small-input"
          value={"+380" + (quizResaults.tel || "")}
          onChange={(e) => {
            let val = e.target.value.replace(/\D/g, ""); // тільки цифри
            val = val.startsWith("380") ? val.slice(3) : val;
            if (val.length <= 9) {
              setQuizResaults({ ...quizResaults, tel: val });
            }
          }}
          maxLength={13} // 4 символи "+380" + 9 цифр
          required
        />

        <button className="calculationQuiz-card-small-getCons">
          <img
            src="/quiz/tg-icon.svg"
            alt=""
            className="calculationQuiz-card-small-icon"
          />
          <p className="text-xs font-semiBold">Отримати розрахунок</p>
        </button>
      </form>
      <p className="text-xxxs">
        Я погоджуюсь з політикою конфіденційності та правилами використання
      </p>
    </div>
  );
}
