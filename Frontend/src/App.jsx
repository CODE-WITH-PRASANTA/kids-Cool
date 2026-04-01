import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import FloatingForm from "./Components/FloatingForm/FloatingForm";
import FloatingIcons from "./Components/FloatingIcons/FloatingIcons";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";


function App() {
  return (
    <>
      <Topbar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/News-Details" element={<NewsDetails />} />
      </Routes>
      <Footer />
      <FloatingIcons />
      <FloatingForm/>
    </>
  );
}

export default App;