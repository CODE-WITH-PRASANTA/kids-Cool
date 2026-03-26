import React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Homehero from "./Components/Homehero/Homehero";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
};
=======
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
>>>>>>> 6b71545aae3711683b78aad5119e4b57858ade90

export default App;