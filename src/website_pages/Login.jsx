import { Outlet, useOutletContext } from "react-router-dom";
import Footer from "../components/website_components/Footer";

const Login = () => {
  const context = useOutletContext();
  return(
    <>
      <main>
        <Outlet context={context}/>
      </main>

      <Footer />
    </>
  )
}

export default Login;