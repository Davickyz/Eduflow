import { Outlet, useOutletContext } from "react-router-dom";
import Footer from "../components/website_components/Footer";
import Header from "../components/website_components/Header";

const Website = () => {
  const context = useOutletContext();
  return(
    <>
      <Header />
      <main className="px-[40px]">
        <Outlet context={context} />
      </main>
      <Footer/>
    </>
  )
}

export default Website;