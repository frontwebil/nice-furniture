import { useRef, useState } from "react";
import { useFormContext } from "../../FormContext";
import "./Form.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const { isOpen, closeForm } = useFormContext();
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      closeForm();
    }
  };
  const sendQuizResaults = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_g69zpkw",
        "template_l4353a8",
        {
          emailTitle: "Новий запит на консультацію з форми",
          messagge: `
          📞 Телефон: +380${phoneNumber}
          👤 Ім'я: ${name}
          `,
        },
        "CnzOwsFQR0Hu_DO7p"
      )
      .then(() => {
        setLoading(false);
        setPhoneNumber("");
        setName("");
        toast.success("Заявку відправлено!");
        closeForm();
      })
      .catch((error) => {
        setLoading(false);
        closeForm();
        alert("Помилка: " + error.text);
        toast.error("Сталася помилка");
      });
  };
  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      {isOpen && (
        <div className="fixed-form" onClick={handleClickOutside}>
          <div className="form-wrapper" ref={formRef}>
            <form action="" className="modal-form" onSubmit={sendQuizResaults}>
              <h3 className="text-md font-bold" style={{ textAlign: "center" }}>
                Ми обов'язково зв'яжемося з вами
              </h3>
              <h4 className="text-base" style={{ textAlign: "center" }}>
                Залиште свої контакти або зв'яжіться з нами!
              </h4>
              <a
                href="tel:0682202291"
                className="text-base font-bold"
                style={{ margin: "10px 0" }}
              >
                🇺🇦 +38 (068) 220 22 91
              </a>
              <p className="text-base">Виникли питання? Пишіть нам в :</p>
              <div className="pop-up-icons">
                <a href="https://msng.link/o?+380682202291=vi">
                  <img src="/icons/vb.svg" alt="" className="icon-social" />
                </a>
                <a href="https://t.me/FayniKuhni1">
                  <img src="/icons/tg.svg" alt="" className="icon-social" />
                </a>
              </div>
              <p className="text-sm">Ім'я</p>
              <input
                type="text"
                className="name-input-modal-form"
                style={{ maxWidth: "100%" }}
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <p className="text-sm">Телефон</p>
              <div
                className="phone-input-wrapper mobile-margins"
                style={{ maxWidth: "100%" }}
              >
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
              <button className="modal-submit">Відправити</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
