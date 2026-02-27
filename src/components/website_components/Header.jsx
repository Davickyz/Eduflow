import SignInButton from "./SignInButton";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return(
    <>
      <header className="flex flex-row justify-between h-[80px] px-[20px] sticky top-0 z-50 backdrop-blur-md bg-red-200">
        <div id="logo" className="flex flex-row items-center gap-[10px]">
          <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
          <h3 className="uppercase font-bold text-secondary-light text-[18px]">EduFlow</h3>
        </div>
        <div className="flex flex-row items-center gap-[40px]">
          <ul className="flex flex-row gap-[10px] border bg-purple-accent">
            <li ><NavLink to="/"  className="nav-item">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-item">About</NavLink></li>
            <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
          </ul>
          <SignInButton /> 
        </div>
      </header>
    </>
  )
}

export default Header;