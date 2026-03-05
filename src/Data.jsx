import { useState } from "react";
import { Outlet } from "react-router-dom";

const Data = () => {
  const [users, setUsers] = useState([
    {
      firstname: "Alabi",
      lastname: "Matilda",
      email: "matildavicky2307@gmail.com",
      course: "Linguistics",
      password: "123456",
    },
  ]);

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
        "Communication & Media",
        "Education & Pedagogy",
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
        "Governance & Administration"
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

  return <Outlet context={{users, setUsers, Courses}} />;
};
export default Data;
