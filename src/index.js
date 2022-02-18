import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./components/LandingPage";
import reportWebVitals from "./reportWebVitals";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LandingPage />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" />
        <Route path="/pay-bills"/>
        <Route path="/transfer"/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
