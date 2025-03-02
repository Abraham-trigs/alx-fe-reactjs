import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />      
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
