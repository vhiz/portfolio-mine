import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { init } from "ityped";
// import Avatar from "../../icons/vhiz.png";
import Avatar2 from "../../icons/avatar.png";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Backend Developer", "Computer Enginer "],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      
      <div className="right">
        <div className="wrapper">
          <h2>Hi I'm</h2>
          <h1>Mgbeahurike Victor</h1>
          <h3>
            Frelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
      <div className="left">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color={"#800080"}
              attach="material"
              distort={0.5}
              speed={1}
            />
          </Sphere>
        </Canvas>
        <img src={Avatar2} alt="" />
      </div>
    </div>
  );
}
