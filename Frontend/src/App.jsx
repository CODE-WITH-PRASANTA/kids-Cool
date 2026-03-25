import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/why" element={<h1>Why</h1>} />
        <Route path="/history" element={<h1>History</h1>} />
        <Route path="/stage" element={<h1>Stage</h1>} />
        <Route path="/teachers" element={<h1>Teachers</h1>} />
        <Route path="/programms" element={<h1>Programms</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/news" element={<h1>News</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;