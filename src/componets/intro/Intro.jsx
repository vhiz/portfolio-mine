import './intro.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useRef } from 'react';
import {init}  from 'ityped'
import Avatar from '../../icons/vhiz.png'

export default function Intro() {

  const textRef = useRef()
  useEffect(()=>{
    init(textRef.current, {showCursor: true, backDelay:1500, strings:['Developer', 'Backend Developer', 'Computer Enginer ' ]})
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContanier">
          <img src={Avatar} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi I'm</h2>
          <h1>Mgbeahurike Victor</h1>
          <h3>Frelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio"><KeyboardArrowDownIcon className='icon'/></a>
      </div>
    </div>
  )
}
