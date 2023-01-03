import './work.scss'
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { works } from '../../data/work';
import { useState } from 'react';

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleClick = (way) => {
    way = 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className='work' id='work'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {works.map(d => (
          <div className="contanier">
            <div className="item">
              <div className="left">
                <div className="leftContanier">
                  <div className="imgContanier">
                    <StayCurrentPortraitIcon className='icon' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <KeyboardArrowLeftIcon className='arrow left' onClick={() => handleClick('left')} />
      <KeyboardArrowRightIcon className='arrow right' onClick={() => handleClick()} />
    </div>
  )
}
