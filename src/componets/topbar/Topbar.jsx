import "./topbar.scss";
import Person4Icon from "@mui/icons-material/Person4";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import Dark from "../../icons/dark.png";
import Light from "../../icons/sun.png";
import { useContext } from "react";
import { DarkModeContext } from "../../darkmode";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Victor
          </a>
          <div className="itemContanier">
            <Person4Icon className="icon" />
            <span>09056394367</span>
          </div>
          <div className="itemContanier">
            <EmailIcon className="icon" />
            <span>victormgbeahurike82@gmail.com</span>
          </div>
          <div className="itemContanier" onClick={toggle}>
            {darkMode ? <img src={Light} alt="" /> : <img src={Dark} alt="" />}
          </div>
          <div className="itemContanier">
            <Link
              to={"https://github.com/vhiz"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GitHubIcon className="icon" />
              <span>Mgbeahurike Victor</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
