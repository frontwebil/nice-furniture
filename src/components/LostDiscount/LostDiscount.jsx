import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./LostDiscount.css";
import { toast } from "react-toastify";
import axios from "axios";

export function LostDiscount() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const isSendingRef = useRef(false);

  const sendQuizResaults = async (e) => {
    e.preventDefault();
    // e.stopPropagation();

    if (isSendingRef.current) return; // 🔒 блокуємо повтор
    isSendingRef.current = true;

    setLoading(true);

    await axios.post(
      "https://kuhni-back.vercel.app/api/sendMessageToTelegram",
      {
        phone: phoneNumber,
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
          emailTitle: "Новий запит на консультацію за телефоном",
          messagge: `
        📞 Телефон: +380${phoneNumber}
        `,
        },
        "CnzOwsFQR0Hu_DO7p",
      )
      .then(() => {
        setLoading(false);
        setPhoneNumber("");
        toast.success("Заявку відправлено!");
        isSendingRef.current = false; // 🔓
      })
      .catch((error) => {
        setLoading(false);
        alert("Помилка: " + error.text);
        toast.error("Сталася помилка");
        isSendingRef.current = false; // 🔓
      });
  };

  return (
    <section className="lostDiscount">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className="container">
        <h2 className="text-xl" style={{ textAlign: "center" }}>
          Ви майже <span className="font-bold">втратили знижку!</span>
        </h2>
        <div className="lostDiscount-content">
          <div className="lostDiscount-content-left">
            <h2 className="text-lg">Тільки зараз і тільки для вас</h2>
            <h3 className="text-lg">Отримайте:</h3>
            <div className="lostDiscount-discount-delivery">
              <div className="lostDiscount-discount-delivery-row">
                <img
                  src="/lostDiscount/discount.svg"
                  alt=""
                  className="lostDiscount-discount-delivery-row-icon"
                />
                <p className="text-base white">5% знижки на кухні</p>
              </div>
              <div className="lostDiscount-discount-delivery-row">
                <img
                  src="/lostDiscount/delivery.svg"
                  alt=""
                  className="lostDiscount-discount-delivery-row-icon"
                />
                <p className="text-base white">Безкоштовну доставку</p>
              </div>
            </div>
          </div>
          <div className="lostDiscount-content-right">
            <h2 className="text-lg">
              Залиште номер — і ми збережемо знижку за вами.
            </h2>
            <form className="lostDiscount-form" onSubmit={sendQuizResaults}>
              <p className="text-sm">Ваш телефон</p>
              <div className="phone-input-wrapper">
                <label className="phone-prefix" htmlFor="phone">
                  +380
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, ""); // тільки цифри
                    if (val.length <= 9) {
                      setPhoneNumber(val);
                    }
                  }}
                  required
                />
              </div>
              <div className="lostDiscount-send">
                <button className="font-bold" disabled={loading}>
                  {loading ? "Відправка..." : "Відправити"}
                </button>
                <p className="text-xs">Пропозиція діє, поки ви на сайті</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
