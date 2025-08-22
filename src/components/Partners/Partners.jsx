import { partnersSrc } from "../../data/partners"
import "./Partners.css"

export function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <h3 className="text-lg" style={{textAlign:'center'}}>Наші <span className="font-bold">замовники</span></h3>
        <div className="partners-grid">
          {partnersSrc.map((el , id)=>
            <div className="partner-img-container" key={id}>
              <img src={el} alt="" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
