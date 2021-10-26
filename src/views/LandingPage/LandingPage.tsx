import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Building my own personal website.</p>
        <p>It's under construction! Please come back soon.</p>
        <Link to="/skills">Skills</Link>
      </header>
    </div>
  );
}

export default LandingPage;
