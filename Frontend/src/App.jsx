import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import FloatingForm from "./Components/FloatingForm/FloatingForm";


function App() {
  return (
    <>
      <Topbar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
      <FloatingForm/>
    </>
  );
}

export default App;