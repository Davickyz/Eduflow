import { Link } from "react-router-dom";
import GetStarted from "../components/website_components/GetStarted.jsx";
import "./Home.css";
import desktopMobile from "../assets/images/desktop-mobile.svg";
import diamonds from "../assets/images/diamonds.svg";
import globalUsers from "../assets/images/globalusers.svg";
import deskPcMobile from "../assets/images/desktop-pc-mobile.svg";
import threeDevices from "../assets/images/3-devices.svg";
import multidisplays from "../assets/images/multidisplays.svg";

const Home = () => {
  return (
    <>
      {/* Main */}
      <section className="w-full flex justify-between items-center h-[80vh]">
        {/* Text Content */}
        <div className="w-[480px] flex  flex-col gap-6 relative">
          {/* Diamond */}
          <img className="absolute right-[-20px] top-[-60px]" src={ diamonds } />

          <h1 className="font-bold text-secondary text-4xl w-full">
            Designed for the driven, built for the curious, and optimized for your success.
          </h1>
          <h4 className="font-light text-secondary-light text-md w-[450px]">
            Through EduFlow's immersive interface, digital lessons transcend the screen to feel tangible, allowing you to master every subject with a completely new style of engagement.
          </h4>
          
          {/* Get Started Button */}
          <div className="flex gap-2 items-center">
            <GetStarted />
            <p className="text-xs font-semibold text-secondary">Available on Mobile and Desktop Device</p>
          </div>

          {/* Other Users */}
          <div className="flex gap-4">
            <img src={ globalUsers } />
            <div className="flex gap-2 items-center">
              <div className="bg-green-accent w-1.5 h-1.5 rounded"></div>
              <p className="text-secondary-light font-normal text-sm">40k people joined</p>
            </div>
          </div>
        </div>
        {/* Image */}
        <div>
          <img className="w-full h-full" src= { desktopMobile } />
        </div>
      </section>

      {/* ScrollBar */}
      <section className="border-y-2 border-secondary flex items-center justify-center gap-24 h-24 my-8">
        <p className="text-secondary font-normal text-md">Architecture</p>
        <p className="text-secondary font-normal text-md">Arts</p>
        <p className="text-secondary font-normal text-md">Science</p>
        <p className="text-secondary font-normal text-md">Business</p>
        <p className="text-secondary font-normal text-md">Literature</p>
      </section>

      <div>
        {/* Evolve Your Learning Style */}
        <section className="flex items-center justify-center gap-[100px] py-20">
          <div>
            <img className="w-[600px]" src={deskPcMobile} />
          </div>
          <div className="w-[500px] border">
            <img src={diamonds} />
            <p>Evolve Your <span>Learning Style</span></p>
            <p>
              Step into a more tangible digital environment where lessons feel alive. EduFlow empowers you to engage with your courses with a new level of depth, making every assignment feel like a personal milestone in your professional evolution.
            </p>
          </div>
        </section>
      </div>
      
    </>
  )
}

export default Home;