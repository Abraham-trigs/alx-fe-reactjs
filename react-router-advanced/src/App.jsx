import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Profile</Link> | 
        <Link to="/ProfileDetails">Profile Details</Link> | 
        <Link to="/ProfileSettings">Profile Settings</Link>|
      </nav>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/ProfileDetails" element={<ProfileDetails />} />
        <Route path="/ProfileSettings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
};

export default App;
