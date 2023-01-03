import './topbar.scss'
import Person4Icon from '@mui/icons-material/Person4';
import EmailIcon from '@mui/icons-material/Email';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Victor</a>
                    <div className="itemContanier">
                        <Person4Icon className='icon' />
                        <span>09056394367</span>
                    </div>
                    <div className="itemContanier">
                        <EmailIcon className='icon' />
                        <span>victormgbeahurike82@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
