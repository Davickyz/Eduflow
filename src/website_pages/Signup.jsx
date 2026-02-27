import { Link } from "react-router-dom";
import "./Login.css";
import signUpImage from "../assets/images/signup-device.svg";
import logo from "../assets/logo.svg";
import openEye from "../assets/icons/open-eye.svg";
import closedEye from "../assets/icons/closed-eye.svg";
import caution from "../assets/icons/caution.svg";

const Signup = () => {
  return (
    <>
      <section className="flex items-center justify-center gap-80 py-[80px]">
        {/* Sign Up Device Image */}
        <div>
          <img className="pointer-events-none" src={signUpImage}/>
        </div>

        {/* Right Side */}
        <div className=" flex flex-col gap-8 ">

          {/* Logo and Welcome */}
          <div className="heading pointer-events-none">
            <img src={ logo }/>
            <h3>Get Started!</h3>
          </div>

          {/* Form fields */}
          <form action="">

            {/* First Name */}
            <div className="signin-input ">
              <label htmlFor="email">First Name</label>
              <input type="text" name="email" id="" />
            </div>

            {/* Last Name */}
            <div className="signin-input ">
              <label htmlFor="email">Last Name</label>
              <input type="text" name="email" id="" />
            </div>

            {/* Email Address */}
            <div className="signin-input ">
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" id="" />
            </div>

            {/* Select Course */}
            <div className="flex justify-between items-center w-full px-2 py-4 text-secondary-light text-xs relative">
              <label htmlFor="email">Select Course</label>
              <select className="border border-secondary-light pl-4 py-1 pr-5 rounded-lg text-secondary appearance-none cursor-pointer hover:border-orange-accent focus:outline-none focus:ring-2 focus:ring-orange-accent/20">
              <option value="" disabled selected hidden></option>
                <option className="bg-primary text-secondary-light cursor-pointer" value="agriculture">Agriculture</option>
                <option className="bg-primary text-secondary-light cursor-pointer" value="Finance">Finance</option>
              </select>
              <div className="pointer-events-none absolute top-5.5 right-3 flex items-center">
                <svg className="h-4 w-4 fill-secondary-light" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {/* Password */}
            <div className="signin-input relative">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
              <div className="eye">
                <img src={ openEye } alt="" />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signin-input relative">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name="password" id="" />
              <div className="eye">
                <img src={ openEye } alt="" />
              </div>
            </div>

            {/* Passswords don't match */}
            <div className="w-full cursor-default flex gap-1 items-center pointer-events-none hidden">
              <div>
                <img src={ caution } />
              </div>
              <p className="text-xs text-yellow-accent">Passwords don't match</p>
            </div>

            {/* Sign up button */}
            <button>Sign Up</button>

            {/* Already have an account */}
            <p>Already Have An Account? <span><Link to="/signin">Sign In</Link></span></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Signup;