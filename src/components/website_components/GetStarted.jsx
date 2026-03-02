import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <>
      <Link to='/signup'>
        <button className="bg-primary border-2 border-orange-accent rounded-lg px-5 h-[38px] text-secondary font-semibold cursor-pointer hover:shadow-[0_0_2px_theme(colors.orange-accent)] ">Get Started !</button>
      </Link>
    </>
  )
}

export default GetStarted;