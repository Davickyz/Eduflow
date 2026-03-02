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

  return <Outlet context={{users, setUsers}} />;
};
export default Data;
