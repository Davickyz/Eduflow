import { Route, Routes } from 'react-router-dom';
import './App.css';
import Website from './website_pages/Website';
import Login from './website_pages/Login';
import Home from './website_pages/Home';
import About from './website_pages/About';
import Contact from './website_pages/Contact';
import Signin from './website_pages/Signin';
import Signup from './website_pages/Signup';
import Data from './Data';
import Eduflow from './app_pages/Eduflow';
import Dashboard from './app_pages/Dashboard';
import Explore from './app_pages/Explore';
import Assignment from './app_pages/Assignment';
import Profile from './app_pages/Profile';


function App() {
  return (
    <Routes>
      
      <Route element={<Data/>}>

        <Route element={<Website/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>

        <Route element={<Login />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<Eduflow />}>
          <Route path="/app/:userId/dashboard" element={<Dashboard />} />
          <Route path="/app/:userId/explore-courses" element={<Explore />} />
          <Route path="/app/:userId/assignments" element={<Assignment />} />
          <Route path="/app/:userId/profile" element={<Profile />} />
          {/* <Route path="/app/:userId/' /> */}
        </Route>

      </Route>
      
    </Routes>
  )
}

export default App
