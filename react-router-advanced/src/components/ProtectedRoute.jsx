import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthenticationStore from './store/AuthenticationStore';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthenticationStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/loginPage" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
