export function AdvantagesCard({ img, title, text }) {
  return (
    <div className="advantages-card">
      <img src={`${img}`} alt="" className="advantages-card-icon"/>
      <h4 className="text-base font-bold">{title}</h4>
      <p className="text-base font-medium">{text}</p>
    </div>
  );
}
