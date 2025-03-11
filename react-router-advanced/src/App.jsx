import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import useAuthStore from './store/authStore';

const App = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/profile">Profile</Link> |
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Dynamic Route (User Profiles) */}
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
