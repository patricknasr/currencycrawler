import React, { useState } from "react";
import "./EmailForm.css";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="email-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submit-button" type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default EmailForm;
