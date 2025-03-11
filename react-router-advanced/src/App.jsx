import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LoginPage from './components/LoginPage'; 
import useAuthenticationStore from './components/store/AuthenticationStore';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isAuthenticated = useAuthenticationStore((state) => state.isAuthenticated);
  const logout = useAuthenticationStore((state) => state.logout);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/profile">Profile</Link> |
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/loginPage">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginPage" element={<LoginPage />} />

        {/* Protected Route for Profile (Parent Route) */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* ✅ Nested Routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route for User Profiles */}
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
