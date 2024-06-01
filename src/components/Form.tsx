import React, { useState } from "react";
import Input from "./Input";
import "./Form.css";

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit" className="next-button">
          Next
        </button>
        {/* <button type="button">Sign-in options</button> */}
      </div>
    </form>
  );
};

export default Form;
