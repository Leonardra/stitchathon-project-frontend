import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./components/LandingPage";
import reportWebVitals from "./reportWebVitals";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav";
import Recharge from "./components/Recharge";
import ErrorPage from "./components/ErrorPage";
import TeamPage from "./components/Team";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/stitchr" element={<LandingPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/pay-bills" />
        <Route path="/transfer" />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
