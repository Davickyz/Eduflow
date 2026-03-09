import { Link, useOutletContext, useNavigate } from "react-router-dom";
import "./Login.css";
import signUpImage from "../assets/images/signup-device.svg";
import logo from "../assets/logo.svg";
import openEye from "../assets/icons/open-eye.svg";
import closedEye from "../assets/icons/closed-eye.svg";
import caution from "../assets/icons/caution.svg";
import { useState } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const { users } = useOutletContext();


  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    let passwordInput = document.getElementById("password");
    let toggleEye = document.getElementById("eye");

    if (passwordInput.type === "password") {
      passwordInput.type = 'text';
      toggleEye.src = openEye;
    } else if (passwordInput.type === "text") {
      passwordInput.type = 'password';
      toggleEye.src = closedEye;
    }
  }

  const logIn = (e) => {
    e.preventDefault();

    if (password !== "" && email !== ""){
      const user = users.find((user) => user.email === email);

      if (!user) {
        console.log("Email not found");
        setErrorStatus(true);
        setErrorMessage("Email not found")
        setTimeout(() => {
          setErrorStatus(false)
        }, 2000)
      } else if (user.password !== password) {
        console.log("incorrect password");
        setErrorStatus(true);
        setErrorMessage("Password incorrect")
        setTimeout(() => {
          setErrorStatus(false)
        }, 2000)
      } else{
        console.log("Login Successful");
        
        navigate(`/app/${user.id}/dashboard`)

        setEmail("");
        setPassword("");
      }
    }
    else {
      setErrorStatus(true);
      setErrorMessage("Fields cannot be empty")
        setTimeout(() => {
          setErrorStatus(false)
        }, 2000)
    }
  };

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
          <div className="heading  pointer-events-none">
            <img src={logo} />
            <h3>Welcome Back!</h3>
          </div>

          {/* Form fields */}
          <form action="" className="login-form">
            {/* Email Address */}
            <div className="input-div">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="input-div">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="eye" onClick={togglePassword}>
                <img id="eye"  src={closedEye} alt="" />
              </div>
            </div>

            {/*  */}
            <div className="flex flex-row-reverse w-full justify-between items-center">
              {/* Forgot Password */}
              <p className="text-sm text-orange-accent font-bold underline cursor-pointer">
                Forgot Password?
              </p>

              {/* Incorrect Password */}
              <div className={`cursor-default flex gap-1 items-center pointer-events-none ${errorStatus ? "opacity-100" : "opacity-0"}`}>
                <div>
                  <img src={caution} />
                </div>
                <p className="text-xs text-yellow-accent">
                  {errorMessage}
                </p>
              </div>
            </div>

            {/* Sign In */}
            <button onClick={(e) => logIn(e)}>Sign In</button>

            {/* Don't Have an Account */}
            <p>
              Don't Have An Account?{" "}
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signin;
