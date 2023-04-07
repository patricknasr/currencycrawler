import React from "react";
import logo from "./cc_logo.png";
import "./App.css";
import EmailForm from "./EmailForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Text-wrapper">
          <p>
            <code>🚧 Construction happening in the background. 🚧</code>
          </p>
          <p>
            <code>✉️ Sign up to receive updates on new releases. ✉️</code>
          </p>
        </div>
        <EmailForm />
      </header>
    </div>
  );
}

export default App;
