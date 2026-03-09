import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, Courses } = useOutletContext();

  const {firstname, lastname, email, course, id, password, picture} = currentUser;

  const foundCourse = Courses.find(item => item.department === course)

  return(
    <>
      <p>{firstname} {lastname}</p>
      <p>Dashboard</p>
      <p>Enrolled Course: {course}</p>

      
      <ul>
        {
          foundCourse.subject_areas.map((subject, index) => (
            <p key={index}>{subject}</p>
          ))
        }
      </ul>
    </>
  )

}

export default Dashboard;