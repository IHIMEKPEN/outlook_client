import React from 'react';
import './SignInOptions.css';

const SignInOptions: React.FC = () => {
  return (
    <div className="signin-options-container">
      <button className="signin-options-button">
        {" "}
        <img
          src="https://logincdn.msftauth.net/shared/5/images/signin_options_4e48046ce74f4b89d450.svg"
          alt="key-logo"
          className="key-icon"
        />
        Sign-in options
      </button>
    </div>
  );
};

export default SignInOptions;
