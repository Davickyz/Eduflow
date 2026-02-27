import logo from "../../assets/logo.svg";
import figma from "../../assets/icons/figma.svg";
import github from "../../assets/icons/github.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return(
    <>
      <footer className="fixed bottom-0 left-0 right-0 px-[20px] py-[60px] flex flex items-center justify-between border-t-2 border-orange-accent">

        {/* Logo */}
        <div id="logo" className="flex flex-row items-center gap-[10px]">
          <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
          <h3 className="uppercase font-bold text-secondary-light text-[18px]">EduFlow</h3>
        </div>

        {/* Navigation & Legal */}
        <div className="flex items-top justify-between w-54">
          {/* Navigation */}
          <div className="flex-col g-4">
            <h5 className="font-bold text-secondary-light">Navigation</h5>
            <ul className="flex flex-col gap-[8px]">
              <li><Link to="/" className="transition-all duration-200 text-secondary-light hover:text-orange-accent">Home</Link></li>
              <li><Link to="/about" className="transition-all duration-200 text-secondary-light hover:text-orange-accent">About</Link></li>
              <li><Link to="/contact" className="transition-all duration-200 text-secondary-light hover:text-orange-accent">Contact</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="flex-col g-4">
            <h5 className="font-bold text-secondary-light">Legal</h5>
            <ul className="flex flex-col gap-[8px]">
              <li className="font-light text-secondary-light">Terms of use</li>
              <li className="font-light text-secondary-light">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Others */}
        <div>
          <div className="flex g-8">
            <a href="https://www.figma.com/design/IAqQqXpESuQZTm0r5K38mQ/EduFlow?node-id=1-2&t=waPfg1snaBQtI5n7-1" target="blank"><img src={figma} alt="Figma icon" /></a>
            <a href="" target="blank"><img src={github} alt="Github icon" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;