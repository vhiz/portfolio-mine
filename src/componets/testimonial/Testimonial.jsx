import './testimonial.scss'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Testimonial() {
  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
      <div className="contanier">
        <div className="card">
          <div className="top">
            <SubdirectoryArrowRightIcon className='arrow' />
            <img src="/assets/transport.jpg" alt="" className='user'/>
            <YouTubeIcon className='youtube' />
          </div>
          <div className="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iure sequi aliquam? Ipsum neque, nobis praesentium quaerat quos odit
          </div>
          <div className="bottom">
            <h3>Vhiz</h3>
            <h4>Ceo of the Invisibles</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
