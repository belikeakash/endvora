import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRides from "./components/AllRides";
import './App.css'
import Previous from "./components/Previous";
import Upcoming from "./components/Upcoming";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllRides/>} />
          <Route path="/up" element={<Upcoming/>} />
          <Route path="/pre" element={<Previous/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
