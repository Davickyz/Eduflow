import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, Courses } = useOutletContext();

  const {firstname, lastname, email, course, id, password, picture} = currentUser;

  return(
    <>
      <p>{firstname} {lastname}</p>
      <p>Dashboard</p>
      <p>Enrolled Course: {course}</p>
    </>
  )

}

export default Dashboard;