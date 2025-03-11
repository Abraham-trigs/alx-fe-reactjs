import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/Profile">Profile</Link> | 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
