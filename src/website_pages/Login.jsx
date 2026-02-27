import { Outlet } from "react-router-dom";
import Footer from "../components/website_components/Footer";

const Login = () => {
  return(
    <>
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Login;