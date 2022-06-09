import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import { useDocTitle } from "./components/CustomHooks";

function App() {
  useDocTitle("AvantisNet | Best Business Consultancy Agency In Canada");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
