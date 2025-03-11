import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <>
    <div>
      <nav>
        <Link to="ProfileDetails">Profile Details</Link> |
        <Link to="ProfileSettings">Profile Settings</Link>
      </nav>

      <h2>Profile Page</h2>

    </div>
    
      <Routes>
        <Route path="ProfileDetails" element={<ProfileDetails />} />
        <Route path="ProfileSettings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
};

export default Profile;
