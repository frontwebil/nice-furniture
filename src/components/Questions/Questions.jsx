import { questionData } from "../../data/questions";
import { QuestionsCard } from "./QuestionsCard";
import "./Questions.css"

export function Questions() {
  return (
    <section className="questions" id="questions">
      <div className="container">
        <h3 className="text-lg" style={{textAlign:'center'}}>Найчастіші <span className="font-bold">питання</span></h3>
        <div className="questions-cards">
          {questionData.map((el , id)=><QuestionsCard title={el.title} text={el.text} key={id}/>)}
        </div>
      </div>
    </section>
  )
}
