import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/why" element={<Why/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/stage" element={<Stage/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/programms" element={<Programms/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;