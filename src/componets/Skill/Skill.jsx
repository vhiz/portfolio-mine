import { skill } from "../../data/skill";
import "./skill.scss";
export default function Skill() {
  return (
    <div className="testimonial" id="skill">
      <h1>Skills</h1>
      <div className="contanier">
        {skill.map((s) => (
          <div className="card" key={s.id}>
            <div className="left">{s.name}</div>
            <div className="right">
              <img src={s.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
