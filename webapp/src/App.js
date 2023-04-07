import React from "react";
import logo from "./cc_logo.png";
import "./App.css";
import EmailForm from "./EmailForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>
            Exciting things happening in the background. Sign up to receive
            updates on new releases.
          </code>
        </p>
        <EmailForm />
      </header>
    </div>
  );
}

export default App;
