import "./css/App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import TargetReport from "./pages/projects/targetReport/TargetReport";
import PhoneCalling from "./pages/projects/phoneCalling/PhoneCalling";
import SyncUp from "./pages/projects/syncUp/SyncUp";
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
          <Route path="/phone-calling" element={<PhoneCalling />} />
          <Route path="/sync-up" element={<SyncUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
