import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <>
    <div>
      <nav>
        <Link to="details">Profile Details</Link> |
        <Link to="settings">Profile Settings</Link>
      </nav>

      <h2>Profile Page</h2>
    </div>
    
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
};

export default Profile;
