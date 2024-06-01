import React, { useState } from "react";
import Input from "./Input";
import "./Form.css";

const Form: React.FC<any> = ({
  stepChange = (v: any) => {},
  emailChange = (v: any) => {},
  step,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step == 0 && (
        <>
          <Input
            type="text"
            placeholder="Email, phone, or Skype"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="additional-options">
            <p>
              No account? <a href="/create-account">Create one!</a>
            </p>
            <button
              type="submit"
              className="next-button"
              onClick={() => {
                stepChange(1);
                emailChange(email);
              }}
            >
              Next
            </button>
            {/* <button type="button">Sign-in options</button> */}
          </div>
        </>
      )}{" "}
      {step == 1 && (
        <>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="additional-options">
            <p>
              <a href="/create-account">Forgot password?</a>
            </p>{" "}
            <br/>
            <p>
              <a href="/create-account">Use my Microsoft app</a>
            </p>
            <button type="submit" className="next-button">
              Signin
            </button>
            {/* <button type="button">Sign-in options</button> */}
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
