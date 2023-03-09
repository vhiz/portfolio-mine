import "./work.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { works } from "../../data/work";
import { useState } from "react";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : way === "right"
      ? setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0)
      : setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {works.map((d) => (
          <div className="contanier">
            <div className="item" key={d.id}>
              <div className="left">
                <div className="leftContanier">
                  <div className="imgContanier">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <KeyboardArrowLeftIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <KeyboardArrowRightIcon
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
