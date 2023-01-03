import Topbar from "./componets/topbar/Topbar";
import Intro from './componets/intro/Intro'
import Portfolio from './componets/portfolio/Portfolio'
import Work from './componets/work/Work'
import Testimonial from './componets/testimonial/Testimonial'
import Contact from './componets/contact/Contact'
import './app.scss'
import { useState } from "react";
import Menu from "./componets/menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen}  setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen = {menuOpen}  setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
      {/* <Testimonial /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
