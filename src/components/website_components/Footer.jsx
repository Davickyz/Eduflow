import logo from "../../assets/logo.svg";
import figma from "../../assets/icons/figma.svg";
import github from "../../assets/icons/github.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return(
    <>
      <footer className="px-[20px] py-[60px] flex flex items-center justify-between bg-footer">

        {/* Logo */}
        <div id="logo" className="flex flex-row items-center gap-[10px]">
          <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
          <h3 className="uppercase font-bold text-secondary-light text-[18px] cursor-default">EduFlow</h3>
        </div>

        {/* Navigation & Legal */}
        <div className="flex items-top justify-between w-54">
          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-secondary-light cursor-default">Navigation</h5>
            <ul className="flex flex-col gap-[4px]">
              <li><Link to="/" className="transition-all duration-200 text-secondary-light hover:text-orange-accent">Home</Link></li>
              <li><Link to="/about" className="transition-all duration-200 text-secondary-light hover:text-orange-accent">About</Link></li>
              <li><Link to="/contact" className="transition-all duration-200 text-secondary-light hover:text-orange-accent">Contact</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-secondary-light cursor-default">Legal</h5>
            <ul className="flex flex-col gap-[4px]">
              <li className="transition-all duration-200 text-secondary-light cursor-pointer hover:text-orange-accent">Terms of use</li>
              <li className="transition-all duration-200 text-secondary-light cursor-pointer hover:text-orange-accent">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Others */}
        <div>
          <div className="flex g-8">
            {/* Figma */}
            <a className="hover:scale-[1.05]" 
              href="https://www.figma.com/design/IAqQqXpESuQZTm0r5K38mQ/EduFlow?node-id=1-2&t=waPfg1snaBQtI5n7-1" target="blank">
              <img src={figma} alt="Figma icon" />
            </a>
            {/* Github */}
            <a className="hover:scale-[1.05]" 
              href="https://github.com/Davickyz/Eduflow" target="blank">
              <img src={github} alt="Github icon" />
            </a>
          </div>
          <p className="mt-2 text-secondary-light font-regular cursor-default">© 2026 EduFlow. All rights reserved.</p>
        </div>

      </footer>
    </>
  )
}

export default Footer;