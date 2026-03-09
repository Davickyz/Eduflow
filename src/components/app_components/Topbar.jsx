import profileIcon from "../../assets/icons/profile.svg";
import searchIcon from "../../assets/icons/search.svg";

const Topbar = ({currentUser, Courses}) => {
  let profile = "";

  const {firstname, lastname, email, course, id, password, picture} = currentUser;

  if(!picture) {
      profile = profileIcon
    } else {
      profile = picture
    }

  return(
    <>
      <header className="flex justify-between items-center w-full h-20 bg-light">
        {/* Profile */}
        <div className="flex gap-2 items-center">
          <img className="h-8 w-8 rounded-full" src={profile} alt="" />
          <p className="text-xl font-normal text-primary italic">Welcome Back, <span className="font-bold not-italic text-2xl">{firstname}</span></p>
        </div>

        {/* Search bar */}
        <div className="relative">
          <input className="bg-light w-96 py-3 pl-4 pr-12 rounded-full text-sm font-normal shadow-[inset_0_0_2px_#04070C] focus:outline-none" type="text" placeholder="Search for your courses" />
          <img className="absolute top-3.5 right-5" src={searchIcon} alt="" />
        </div>
      </header>
    </>
  )
}

export default Topbar;