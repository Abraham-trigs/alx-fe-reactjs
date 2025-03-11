import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
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
          <Link to="/loginPage">Login </Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginPage" element={<LoginPage />} /> {/* ✅ Use LoginPage instead of Login */}

        {/* Protected Route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
         {/* Dynamic Route User Profiles */}
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
