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
          <form action="" className="login-form">

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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 16C14.6581 16 18.5001 13.839 18.5001 11C18.5001 8.161 14.6581 6 10.0001 6C5.34206 6 1.50006 8.161 1.50006 11C1.50006 13.839 5.34206 16 10.0001 16ZM10.0001 7C14.1791 7 17.5001 8.868 17.5001 11C17.5001 13.132 14.1791 15 10.0001 15C5.82106 15 2.50006 13.132 2.50006 11C2.50006 8.868 5.82106 7 10.0001 7Z" fill="#F5F5F5" fill-opacity="0.8"/>
                  <path d="M9.50009 3.5C9.50009 3.36739 9.55277 3.24021 9.64654 3.14645C9.74031 3.05268 9.86748 3 10.0001 3C10.1327 3 10.2599 3.05268 10.3536 3.14645C10.4474 3.24021 10.5001 3.36739 10.5001 3.5V6.5C10.5001 6.63261 10.4474 6.75979 10.3536 6.85355C10.2599 6.94732 10.1327 7 10.0001 7C9.86748 7 9.74031 6.94732 9.64654 6.85355C9.55277 6.75979 9.50009 6.63261 9.50009 6.5V3.5ZM13.5101 3.902C13.5399 3.77584 13.6175 3.66617 13.7266 3.59613C13.8356 3.5261 13.9677 3.50116 14.0948 3.52658C14.2219 3.552 14.3342 3.6258 14.4079 3.7324C14.4817 3.83901 14.5111 3.97009 14.4901 4.098L13.9901 6.598C13.9603 6.72416 13.8827 6.83383 13.7736 6.90387C13.6645 6.9739 13.5325 6.99884 13.4054 6.97342C13.2783 6.948 13.166 6.8742 13.0923 6.7676C13.0185 6.66099 12.9891 6.52991 13.0101 6.402L13.5101 3.902ZM6.49009 3.902C6.46031 3.77584 6.3827 3.66617 6.27362 3.59613C6.16454 3.5261 6.03252 3.50116 5.90541 3.52658C5.7783 3.552 5.66603 3.6258 5.59227 3.7324C5.51852 3.83901 5.48906 3.97009 5.51009 4.098L6.01009 6.598C6.03987 6.72416 6.11749 6.83383 6.22657 6.90387C6.33565 6.9739 6.46766 6.99884 6.59478 6.97342C6.72189 6.948 6.83416 6.8742 6.90791 6.7676C6.98166 6.66099 7.01112 6.52991 6.99009 6.402L6.49009 3.902ZM2.42909 5.243C2.36093 5.12922 2.25036 5.04718 2.12171 5.01492C1.99306 4.98267 1.85687 5.00284 1.74309 5.071C1.62931 5.13916 1.54727 5.24973 1.51502 5.37838C1.48276 5.50703 1.50293 5.64322 1.57109 5.757L3.07109 8.257C3.13925 8.37078 3.24982 8.45282 3.37847 8.48507C3.50712 8.51733 3.64331 8.49716 3.75709 8.429C3.87087 8.36084 3.95291 8.25027 3.98517 8.12162C4.01742 7.99297 3.99725 7.85678 3.92909 7.743L2.42909 5.243ZM17.5711 5.243C17.6048 5.18666 17.6494 5.13752 17.7021 5.09839C17.7548 5.05926 17.8148 5.0309 17.8785 5.01492C17.9422 4.99895 18.0084 4.99568 18.0734 5.00531C18.1383 5.01493 18.2008 5.03725 18.2571 5.071C18.3134 5.10475 18.3626 5.14927 18.4017 5.20201C18.4408 5.25475 18.4692 5.31468 18.4852 5.37838C18.5011 5.44208 18.5044 5.5083 18.4948 5.57327C18.4852 5.63823 18.4628 5.70066 18.4291 5.757L16.9291 8.257C16.8953 8.31334 16.8508 8.36248 16.7981 8.40161C16.7453 8.44074 16.6854 8.4691 16.6217 8.48507C16.558 8.50105 16.4918 8.50432 16.4268 8.49469C16.3619 8.48507 16.2994 8.46275 16.2431 8.429C16.1868 8.39525 16.1376 8.35073 16.0985 8.29799C16.0594 8.24525 16.031 8.18532 16.015 8.12162C15.999 8.05792 15.9958 7.9917 16.0054 7.92673C16.015 7.86177 16.0373 7.79934 16.0711 7.743L17.5711 5.243ZM13.0001 10.5C13.0001 11.2956 12.684 12.0587 12.1214 12.6213C11.5588 13.1839 10.7957 13.5 10.0001 13.5C9.20444 13.5 8.44138 13.1839 7.87877 12.6213C7.31616 12.0587 7.00009 11.2956 7.00009 10.5C7.00009 9.70435 7.31616 8.94129 7.87877 8.37868C8.44138 7.81607 9.20444 7.5 10.0001 7.5C10.7957 7.5 11.5588 7.81607 12.1214 8.37868C12.684 8.94129 13.0001 9.70435 13.0001 10.5Z" fill="#F5F5F5" fill-opacity="0.8"/>
                </svg>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signin-input relative">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name="password" id="" />
              <div className="eye">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 8.3335C3.21589 9.20098 4.05874 9.95532 5 10.571M5 10.571C6.01375 11.2324 7.14551 11.6922 8.33333 11.9252C9.43438 12.1367 10.5656 12.1367 11.6667 11.9252C12.8545 11.6922 13.9862 11.2324 15 10.571M5 10.571L3.75 12.0835M17.5 8.3335C16.7841 9.20098 15.9413 9.95532 15 10.571M15 10.571L16.25 12.0835M8.33333 11.9243L7.91667 13.7502M11.6667 11.9243L12.0833 13.7502" stroke="#F5F5F5" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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