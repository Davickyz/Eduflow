import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/website_components/Header";
import Home from './website_pages/Home';
import About from './website_pages/About';
import Contact from './website_pages/Contact';
import Signin from './website_pages/Signin';
import Signup from './website_pages/Signup';
import Footer from './components/website_components/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>

      
      <Footer />
    </>
  )
}

export default App
