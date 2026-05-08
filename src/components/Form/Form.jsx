import { useRef, useState } from "react";
import { useFormContext } from "../../FormContext";
import "./Form.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

export function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const { isOpen, closeForm } = useFormContext();
  const [loading, setLoading] = useState(false);
  const isSendingRef = useRef(false);

  const formRef = useRef(null);
  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      closeForm();
    }
  };
  const sendQuizResaults = async (e) => {
    e.preventDefault();

    if (isSendingRef.current) return;
    isSendingRef.current = true;

    setLoading(true);

    try {
      await axios.post(
        "https://kuhni-back.vercel.app/api/sendMessageToTelegram",
        {
          name,
          phone: phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      await emailjs.send(
        "service_g69zpkw",
        "template_l4353a8",
        {
          emailTitle: "Новий запит на консультацію з форми",
          messagge: `
📞 Телефон: +380${phoneNumber}
👤 Ім'я: ${name}
        `,
        },
        "CnzOwsFQR0Hu_DO7p",
      );

      setLoading(false);
      setPhoneNumber("");
      setName("");
      toast.success("Заявку відправлено!");
      closeForm();
    } catch (error) {
      setLoading(false);
      toast.error("Сталася помилка");
      console.error(error);
    } finally {
      isSendingRef.current = false;
    }
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
              <IoMdClose
                className="testimonialsSlider-icon-close"
                onClick={() => closeForm()}
              />
              <h3
                className="text-md font-semiBold"
                style={{ textAlign: "center" }}
              >
                Зв'яжіться з нами!
              </h3>
              <a
                href="tel:0800-33-78-15"
                className="text-base font-bold"
                style={{ margin: "0px 0 10px", textAlign: "center" }}
              >
                0800-33-78-15
              </a>
              <a
                href="tel:044-599-69-69"
                className="text-base font-bold"
                style={{ margin: "0px 0 10px", textAlign: "center" }}
              >
                044-599-69-69
              </a>
              <p className="text-base font-semiBold">Тисніть на іконки:</p>
              <div className="pop-up-icons" style={{ marginTop: "10px" }}>
                <a href="https://msng.link/o?+380678295889=vi">
                  <img src="/icons/vb.svg" alt="" className="icon-social" />
                </a>
                <a href="https://t.me/FainiKuhni">
                  <img src="/icons/tg.svg" alt="" className="icon-social" />
                </a>
              </div>
              <h3
                className="text-md font-semiBold"
                style={{ textAlign: "center" }}
              >
                Або залиште свої контакти
              </h3>
              <input
                type="text"
                className="name-input-modal-form"
                style={{ maxWidth: "100%" }}
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
              <button className="modal-submit" disabled={loading}>
                {loading ? "Відправка..." : "Відправити"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
