import React from "react";
import Form from "./Form";
import "./Login.css";
import { VscArrowLeft } from "react-icons/vsc";

const Login: React.FC<any> = () => {
  const [step, setStep] = React.useState<number>(0);
  const [email, setEmail] = React.useState<string>("");
  return (
    <div className="login-container">
      <div className="login-header">
        <img
          src="https://logincdn.msftauth.net/shared/5/images/microsoft_logo_ee5c8d9fb6248c938fd0.svg"
          alt="Microsoft Logo"
          className="logo login-logo"
        />
        {step == 0 && (
          <>
            <h2>Sign in</h2>
            <p>to continue to Outlook</p>
          </>
        )}
        {step == 1 && (
          <>
            <h6>
              <VscArrowLeft
                style={{ marginRight: ".7rem", cursor: "pointer",fontSize:'1.2rem' }}
                onClick={() => {
                  setStep(0);
                }}
              />
              {email}
            </h6>
            <h2>Enter password</h2>
          </>
        )}
      </div>
      <Form
        step={step}
        stepChange={(v: number) => {
          setStep(v);
        }}
        emailChange={(v: string) => {
          console.log(v)
          setEmail(v);
        }}
      />
    </div>
  );
};

export default Login;
