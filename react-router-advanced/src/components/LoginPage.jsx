import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthenticationStore from './store/AuthenticationStore';

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); 
    navigate('/profile'); 
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
