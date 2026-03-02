import { Link } from "react-router-dom";
import "./Login.css";
import signUpImage from "../assets/images/signup-device.svg";
import logo from "../assets/logo.svg";
import caution from "../assets/icons/caution.svg";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import openEye from "../assets/icons/open-eye-light.svg";
import closedEye from "../assets/icons/closed-eye-light.svg";

const Signup = () => {
  const {users, setUsers} = useOutletContext();

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error");
  const [selectOption, setSelectOption] = useState(false);
  const [initialPassword, setInitialPassword] = useState("");
  const [finalPassword, setFinalPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] =useState("");
  let person = {};

  const handleSignup = (e) => {
    e.preventDefault();

    if (finalPassword === initialPassword && course !== "" && finalPassword !== "" && firstname !== "" && lastname !== "" && email !== "") {
      setShowError(false);
      setSelectOption(false)
      person ={
        firstname: firstname,
        lastname: lastname,
        email : email,
        course: course,
        password: finalPassword,
      };

      setUsers([
        ...users,
        person
      ]);

      console.log(users)

      setCourse("");
      setEmail("");
      setFinalPassword("");
      setInitialPassword("");
      setLastName("");
      setFirstName("");
    } 
    else {
      if(finalPassword === "" || initialPassword === "" || firstname === "" || lastname === "" || email === ""){
        setShowError(true);
        setErrorMessage("Field(s) cannot be blank");
        setTimeout(() => {
          setShowError(false)
        }, 5000)
      }
      if (course === ""){
        setSelectOption(true);
        setTimeout(()=>{
          setSelectOption(false)
        }, 5000)
      }
      if (finalPassword !== initialPassword ) {
        setShowError(true);
        setErrorMessage("Passwords don't match");
        setTimeout(() => {
          setShowError(false)
        }, 5000)
      }
    };
  }
  return (
    <>
      <section className="flex items-center justify-center gap-80 py-[80px]">
        {/* Sign Up Device Image */}
        <div>
          <img className="pointer-events-none" src={signUpImage} />
        </div>

        {/* Right Side */}
        <div className=" flex flex-col gap-8 ">
          {/* Logo and Welcome */}
          <div className="heading pointer-events-none">
            <img src={logo} />
            <h3>Get Started!</h3>
          </div>

          {/* Form fields */}
          <form action="" className="login-form">
            {/* First Name */}
            <div className="signin-input ">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="signin-input ">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}                
              />
            </div>

            {/* Email Address */}
            <div className="signin-input ">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Select Course */}
            <div className="w-full px-2 py-4">
              <div className="flex justify-between items-center w-full text-secondary-light text-xs relative">
                <label htmlFor="email">Select Course</label>
                <select
                  className="border border-secondary-light pl-4 py-1 pr-5 rounded-lg text-secondary appearance-none cursor-pointer hover:border-orange-accent focus:outline-none focus:ring-2 focus:ring-orange-accent/20"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="" disabled selected hidden></option>
                  <option
                    className="bg-primary text-secondary-light cursor-pointer"
                    value="agriculture"
                  >
                    Agriculture
                  </option>
                  <option
                    className="bg-primary text-secondary-light cursor-pointer"
                    value="finance"
                  >
                    Finance
                  </option>
                </select>
                <div className="pointer-events-none absolute top-1.5 right-1 flex items-center">
                  <svg
                    className="h-4 w-4 fill-secondary-light"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              
              <div
                className={`w-full cursor-default flex flex-row gap-1 items-center transition-opacity duration-300 
                  ${selectOption ? "opacity-100 " : "pointer-events-none opacity-0"}`}
                id="caution"
              >
                <div>
                  <img src={caution} />
                </div>
                <p className="text-xs text-yellow-accent">
                  Kindly pick a course
                </p>
              </div>
            </div>
           

            {/* Password */}
            <div className="signin-input relative">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={initialPassword}
                onChange={(e) => setInitialPassword(e.target.value)}
              />
              <div className="eye">
                <img src={openEye}/>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signin-input relative">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="password"
                value={finalPassword}
                onChange={(e) => setFinalPassword(e.target.value)}
              />
              <div className="eye">
                <img src={closedEye} alt="" />
              </div>
            </div>

            {/* Passswords don't match */}

            <div
              className={`w-full cursor-default flex flex-row gap-1 items-center transition-opacity duration-300 
                ${showError ? "opacity-100 " : "pointer-events-none opacity-0"}`}
              id="caution"
            >
              <div>
                <img src={caution} />
              </div>
              <p className="text-xs text-yellow-accent">
                {errorMessage}
              </p>
            </div>

            {/* Sign up button */}
            <button onClick={(e) => handleSignup(e)}>Sign Up</button>

            {/* Already have an account */}
            <p>
              Already Have An Account?{" "}
              <span>
                <Link to="/signin">Sign In</Link>
              </span>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
