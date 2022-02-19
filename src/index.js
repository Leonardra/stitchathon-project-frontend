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
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transfer from "./components/Transfer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/stitchr" element={<LandingPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pay-bills" />
        <Route path="/transfer" element={<Transfer />} />
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
