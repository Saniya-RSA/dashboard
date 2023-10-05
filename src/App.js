import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import SideNavbar from "./Components/SideNavbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/SideNavbar" element={<SideNavbar />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
