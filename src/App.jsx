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

      </Route>
      
    </Routes>
  )
}

export default App
