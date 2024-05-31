import React from 'react';
import Login from './components/Login';
import SignInOptions from './components/SignInOptions';

const App: React.FC = () => {
  return (
    <div className="App">
      <img src="https://logincdn.msftauth.net/shared/5/images/53_8b36337037cff88c3df2.png" alt="Outlook" className="outlook-logo" />
      <Login />
      <SignInOptions />
    </div>
  );
};

export default App;
