import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import { Link } from "react-router-dom";

function SkillsPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Skills base.</p>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
}

export default SkillsPage;
