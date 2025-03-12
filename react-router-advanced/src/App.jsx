import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';
import LoginPage from './components/LoginPage'; 
import BlogPost from './components/BlogPost'; // ✅ Import BlogPost Component
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
        <Link to="/blog/1">Sample Blog 1</Link> | {/* ✅ Example Blog Link */}
        <Link to="/blog/2">Sample Blog 2</Link> |
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/loginPage">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginPage" element={<LoginPage />} />

        {/* ✅ Dynamic Blog Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route for User Profiles */}
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
