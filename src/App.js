import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Home/>} />
          <Route path="/resume" element={<Home />} />
          <Route path="*" element={<Home to="/"/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
