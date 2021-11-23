import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
