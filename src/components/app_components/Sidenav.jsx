import logo from "../../assets/logo.svg";
import { Link, NavLink, useParams } from "react-router-dom";
import dashboard from "../../assets/icons/dashboard.svg";
import explore from "../../assets/icons/explore-courses.svg";
import assignments from "../../assets/icons/assignments.svg";
import profile from "../../assets/icons/profile-settings.svg";
import "./Sidenav.css";

const Sidenav = () => {

  const { userId } = useParams();

  return(
    <>
      <aside className="bg-primary border-right-2 border-secondary w-50 px-3 py-2 flex flex-col">
      {/* Logo */}
        <div className="h-20 flex items-center">
          <img className="w-12 h-12" src={logo} />
        </div>

      {/* Navigation */}
        <div  className="h-full py-4">
          <ul>
            <NavLink className="sidenav-item" to={`/app/${userId}/dashboard`}>
              <img src={dashboard} />
              Dashboard
            </NavLink>
            <NavLink className="sidenav-item" to={`/app/${userId}/explore-courses`}>
              <img src={explore} />
              Explore Courses
            </NavLink>
            <NavLink className="sidenav-item" to={`/app/${userId}/assignments`}>
              <img src={assignments} />
              Assignments
            </NavLink>
            <NavLink className="sidenav-item" to={`/app/${userId}/profile`}>
              <img src={profile} />
              Profile
            </NavLink>
          </ul>
        </div>

      {/* terms & Condition */}
        <div className="text-secondary-light underline">
          <NavLink >Terms & Condition</NavLink>
          <NavLink> Contact us </NavLink>
        </div>
      </aside>
    </>
  )
}

export default Sidenav;