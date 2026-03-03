import GetStarted from "../components/website_components/GetStarted.jsx";
import "./Home.css";
import desktopMobile from "../assets/images/desktop-mobile.svg";
import diamonds from "../assets/images/diamonds.svg";
import globalUsers from "../assets/images/globalusers.svg";
import deskPcMobile from "../assets/images/desktop-pc-mobile.svg";
import threeDevices from "../assets/images/3-devices.svg";
import signUpDevice from "../assets/images/signup-device.svg";
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

      <div className="flex flex-col gap-24 py-20">
        {/* Evolve Your Learning Style */}
        <section className="flex items-center justify-center gap-[100px]">
          <div>
            <img className="w-[600px]" src={deskPcMobile} />
          </div>
          <div className="w-[450px] relative flex flex-col gap-6">
            <img className="absolute top-[-60px] left-[-50px]" src={diamonds} />
            <p className="font-normal text-xl text-secondary flex items-center gap-4 italic">Evolve Your <span  className="text-4xl text-orange-accent not-italic font-bold">Learning Style</span></p>
            <p className="font-thin text-secondary-light text-sm">
              Step into a more tangible digital environment where lessons feel alive. EduFlow empowers you to engage with your courses with a new level of depth, making every assignment feel like a personal milestone in your professional evolution.
            </p>
          </div>
        </section>

        {/* Where Ambition Meets Action */}
        <section className="flex flex-row-reverse items-center justify-center gap-[100px]">
          <div>
            <img className="w-[450px]" src={threeDevices} />
          </div>
          <div className="w-[450px] relative flex flex-col gap-6">
            <img className="absolute top-[-60px] left-[-50px]" src={diamonds} />
            <p className="font-normal text-xl text-secondary flex items-center gap-4 italic">Where Ambition <span  className="text-4xl text-orange-accent not-italic font-bold">Meets Action</span></p>
            <p className="font-thin text-secondary-light text-sm">
              Don't just track your education -- immerse yourself in it. EduFlow harmonizes your resources and assignments into a single, intuitive strea,, allowing you to dive deep into new subjects and emerge with a redefined understsnding of your potential.
            </p>
          </div>
        </section>

        {/* Stay Driven Stay Curious */}
        <section className="flex items-center justify-center gap-[100px]">
          <div>
            <img className="w-[250px]" src={signUpDevice} />
          </div>
          <div className="w-[450px] relative flex flex-col gap-6">
            <img className="absolute top-[-60px] left-[-50px]" src={diamonds} />
            <p className="font-normal text-xl text-secondary flex items-center gap-4 italic">Stay Driven <span  className="text-4xl text-orange-accent not-italic font-bold">Stay Curious</span></p>
            <p className="font-thin text-secondary-light text-sm">
              Your curiosity has no limits, and neither should your library. Explore our curated picks designed for the driven mind and find the next book that will redefine your perspective.
            </p>
            <GetStarted />
          </div>
        </section>

        <section className="flex flex-col items-center gap-[40px] mt-10">
          <h3 className="text-2xl text-secondary-light font-normal text-center w-[930px]">Shortlist your essential reads and track your completion rate from the first page to the final module.</h3>
          <img className="w-[1100px]" src={multidisplays} />
        </section>

      </div>
      
    </>
  )
}

export default Home;