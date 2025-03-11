import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <nav>
        <Link to="details">Profile Details</Link> |
        <Link to="settings">Profile Settings</Link>
      </nav>

      <h2>Profile Page</h2>

      {/* ✅ Outlet ensures nested routes render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
