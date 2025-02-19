import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./Pages/Home.css";
import About from "./Pages/About";
import "./Pages/About.css";
import Projects from "./Pages/Projects";
import "./Pages/Projects.css";
import Contact from "./Pages/Contact";
import "./Pages/Cantact.css";
import Navbar from "./component/Navbar";
import "./component/Navbar.css";
import "./component/Footer.css";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
