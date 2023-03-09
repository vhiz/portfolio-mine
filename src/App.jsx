import Topbar from "./componets/topbar/Topbar";
import Intro from "./componets/intro/Intro";
import Portfolio from "./componets/portfolio/Portfolio";
import Work from "./componets/work/Work";
import Contact from "./componets/contact/Contact";
import "./app.scss";
import { useContext, useState } from "react";
import Menu from "./componets/menu/Menu";
import Skill from "./componets/Skill/Skill";
import { DarkModeContext } from "./darkmode";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Work />
          <Skill />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
