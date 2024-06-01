import React from 'react';
import Login from './components/Login';
import SignInOptions from './components/SignInOptions';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app-container ">
      <div className="background-container"></div>
      <div className="app-content">
        <img
          src="https://logincdn.msftauth.net/shared/5/images/53_8b36337037cff88c3df2.png"
          alt="Outlook"
          className="outlook-logo"
        />
        <Login />
        <SignInOptions />
      </div>
    </div>
  );
};

export default App;
