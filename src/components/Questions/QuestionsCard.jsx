import { useState, useRef } from "react";

export function QuestionsCard({ text, title }) {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="question-card">
      <div
        className="question-card-top"
        onClick={() => setIsOpenCard(!isOpenCard)}
      >
        <p className="text-xs">{title}</p>
        <img src="/questions/icon.svg" alt="" className={`question-card-top-icon ${isOpenCard && "active"}`}/>
      </div>

      <div
        ref={contentRef}
        className="question-card-content"
        style={{
          maxHeight: isOpenCard
            ? contentRef.current?.scrollHeight + "px"
            : "0px",
          paddingTop: isOpenCard ? "15px" : "0px",
        }}
      >
        <p className="text-xxs">{text}</p>
      </div>
    </div>
  );
}
