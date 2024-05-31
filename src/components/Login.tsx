import React from 'react';
import Form from './Form';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <img
          src="https://logincdn.msftauth.net/shared/5/images/microsoft_logo_ee5c8d9fb6248c938fd0.svg"
          alt="Microsoft Logo"
          className="logo"
        />
        <h2>Sign in</h2>
        <p>to continue to Outlook</p>
      </div>
      <Form />
    </div>
  );
};

export default Login;
