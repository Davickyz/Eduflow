import { useEffect, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import Error from "./Error";
import Sidenav from "../components/app_components/Sidenav";
import Topbar from "../components/app_components/Topbar";

const Eduflow = () => {
  const context = useOutletContext();
  const {userId} = useParams();
  const {users, Courses} = useOutletContext();
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const foundUser = users.find(user => user.id === userId);
    setCurrentUser(foundUser);

    // console.log("Searching for ID:", userId);
    // console.log("Available Users:", users);
    // console.log("Match Found?:", foundUser);
  }, [userId, users])

  if(!currentUser){
    return <>
      {/* <Error /> */}
      <p>Loading</p>
    </>
  }

  return(
    <>
      <section className="bg-light flex relative h-screen">
        <Sidenav />
        <div className="flex-1 flex-col  px-4">
          <Topbar users={users} Courses={Courses} currentUser={currentUser} />
          <main className="bg-light">
            <Outlet context={{users, Courses, currentUser}}/>
          </main>
        </div>
      </section>
    </>
  )
}

export default Eduflow;