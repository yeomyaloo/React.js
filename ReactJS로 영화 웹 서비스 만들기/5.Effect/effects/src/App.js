import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  Browser as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router> 
    <Routes>
      <Route path="movie" element={<Detail />}/>
      <Route path="/" element ={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;