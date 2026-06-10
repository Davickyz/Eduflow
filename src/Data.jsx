import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Data = () => {
  const Courses = [
    {
      department: "Science & Nature",
      subject_areas: [
        "Physics & Astronomy",
        "Biology & Life Sciences",
        "Chemistry",
        "Ecology & Conservation",
        "Environmental Science",
        "Earth Sciences & Geology",
        "Genetics",
        "Marine Biology"
      ]
    },
    {
      department: "Social Sciences",
      subject_areas: [
        "Psychology",
        "Sociology",
        "Anthropology",
        "Communication",
        "Education",
        "Criminology",
        "Linguistics",
        "Gender Studies"
      ]
    },
    {
      department: "Tech & Engineering",
      subject_areas: [
        "Computer Science",
        "Artificial Intelligence",
        "Software Engineering",
        "Mechanical Engineering",
        "Cybersecurity",
        "Robotics",
        "Data Science",
        "Electrical Engineering"
      ]
    },
    {
      department: "Business & Economics",
      subject_areas: [
        "Microeconomics",
        "Macroeconomics",
        "Finance & Accounting",
        "Marketing & Advertising",
        "Entrepreneurship",
        "International Business",
        "Management & Leadership",
        "Supply Chain & Logistics"
      ]
    },
    {
      department: "Medicine & Health",
      subject_areas: [
        "General Medicine",
        "Nursing",
        "Pharmacy & Pharmacology",
        "Public Health",
        "Nutrition & Dietetics",
        "Mental Health",
        "Anatomy & Physiology",
        "Sports Medicine"
      ]
    },
    {
      department: "Philosophy & Religion",
      subject_areas: [
        "Ethics",
        "Logic & Epistemology",
        "Comparative Religion",
        "Metaphysics",
        "Theology",
        "Eastern Philosophy",
        "Philosophy of Science",
        "Religious History"
      ]
    },
    {
      department: "Law & Politics",
      subject_areas: [
        "Constitutional Law",
        "International Relations",
        "Political Theory",
        "Criminal Justice",
        "Human Rights",
        "Public Policy",
        "Corporate Law",
        "Governance"
      ]
    },
    {
      department: "History & Geography",
      subject_areas: [
        "World History",
        "Human Geography",
        "Archaeology",
        "Physical Geography",
        "Cartography & GIS",
        "Modern History",
        "Cultural Heritage",
        "Geopolitics"
      ]
    }
  ]


  const [users, setUsers] = useState([]);

  useEffect(() => {
    let database = localStorage.getItem('database');

    if(!database){
      // if database is empty
      fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
          data = data.results.map(user => {
            return{
              firstname: user.name.first,
              lastname: user.name.last,
              email: user.email,
              password: user.login.salt,
              id: user.login.uuid,
              // Assigned Course Index
              course: Courses[Math.floor(Math.random() * Courses.length)].department,
              picture: user.picture.large
            }
          })
          setUsers(data)
          localStorage.setItem('database', JSON.stringify(data))
        })
        .catch(error => console.log('Error :' , error))
    } else {
      // if database exist,
      database = JSON.parse(database)
      setUsers(database);
    }
    
  },[])

  // Update Local Storage whenver there is a change in users
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('database', JSON.stringify(users));
      // console.log(users)
    }
  }, [users]);

  

  return <Outlet context={{users, setUsers, Courses}} />;
};
export default Data;
