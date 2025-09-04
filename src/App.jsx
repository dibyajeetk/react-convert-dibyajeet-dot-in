import "./css/App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import TargetReport from "./pages/projects/TargetReport";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/target-report" element={<TargetReport />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
