import { Link } from "react-router-dom";
import "./Login.css";
import signUpImage from "../assets/images/signup-device.svg";
import logo from "../assets/logo.svg";
import openEye from "../assets/icons/open-eye.svg";
import closedEye from "../assets/icons/closed-eye.svg";
import caution from "../assets/icons/caution.svg";

const Signin = () => {
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
          <div className="heading  pointer-events-none">
            <img src={ logo } />
            <h3>Welcome Back!</h3>
          </div>

          {/* Form fields */}
          <form action="" className="login-form">

            {/* Email Address */}
            <div className="input-div">
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" id="" />
            </div>

            {/* Password */}
            <div className="input-div">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
              <div className="eye">
                <img src={ openEye } alt="" />
              </div>
            </div>

            {/*  */}
            <div className="flex flex-row-reverse w-full justify-between items-center">
              {/* Forgot Password */}
              <p className="text-sm text-orange-accent font-bold underline cursor-pointer">Forgot Password?</p>

              {/* Incorrect Password */}
              <div className="cursor-default flex gap-1 items-center pointer-events-none hidden">
                <div>
                  <img src={ caution } />
                </div>
                <p className="text-xs text-yellow-accent">Incorrect password or email</p>
              </div>
            </div>

            {/* Sign In */}
            <button>Sign In</button>

            {/* Don't Have an Account */}
            <p>Don't Have An Account? <span><Link to="/signup">Sign Up</Link></span></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Signin;