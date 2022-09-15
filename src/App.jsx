import './App.css';
import React from 'react';
import { PasswordGenerator } from "./components/PasswordGenerator"

function App() {
  return (
    <div className="App">
      <p className="heading-medium" style={{color: "var(--grey)"}}>Password Generator</p>
      <PasswordGenerator/>
    </div>
  );
}

export default App;
