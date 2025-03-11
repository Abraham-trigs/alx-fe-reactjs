import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/profileDetails';
import ProfileSettings from './components/ProfileSettings';
import Home from './components/Home';
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
        {/* <Route path="/ProfileDetails" element={<ProfileDetails />} /> */}
        {/* <Route path="/ProfileSettings" element={<ProfileSettings />} /> */}
      </Routes>
    </>
  );
};

export default App;
