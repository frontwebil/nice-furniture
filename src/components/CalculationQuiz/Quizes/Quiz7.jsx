export function Quiz7() {
  return (
    <div className="calculationQuiz-cards-with-image" style={{ marginTop: 0 }}>
      <div className="calculationQuiz-cards-thank">
        <div className="calculationQuiz-cards-thank-text">
          <h3 className="text-base font-semiBold">Дякуємо!</h3>
          <p className="text-xs">Наш менеджер зв’яжеться з Вами</p>
        </div>
        <div className="calculationQuiz-cards-thank-text">
          <div className="calculationQuiz-card-small-discount">Знижка 20%</div>
          <a href="/" className="calculationQuiz-card-small-getCons">
            <p className="text-xs font-semiBold">Готово</p>
          </a>
        </div>
      </div>
      <img
        src="/quiz/7/main.png"
        alt=""
        className="calculationQuiz-cards-image"
      />
    </div>
  );
}
