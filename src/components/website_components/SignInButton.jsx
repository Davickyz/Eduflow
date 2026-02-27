import "./SignInButton.css";
import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <>
     <Link to="/signin"><button className="sign-in">Sign In</button></Link>
    </>
  )
}

export default SignInButton;