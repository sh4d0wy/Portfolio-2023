import { useState } from "react";
import HomePage from "../Home/HomePage";
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    );
}

export default App;
