import { Outlet } from "react-router-dom";
import Footer from "../components/website_components/Footer";
import Header from "../components/website_components/Header";

const Website = () => {
  return(
    <>
      <Header />
      <main className="px-[40px]">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default Website;