import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Project from "./components/Projects";
import { NavMenu } from "./components/SideBar";
import Skills from "./components/Skills";
import Theme from "./components/Theme";


export default function App() {
  return (
  <Theme>
    <div className="sticky top-0 bg-inherit pb-3 pt-2 z-10 ">
    <NavBar/>
    <NavMenu/>
    </div>
    <About/>
    <AboutMe/>
    <Skills/>
    <Experience/>
    <Project/>
    <Contact/>
  </Theme>
  )  
  };
