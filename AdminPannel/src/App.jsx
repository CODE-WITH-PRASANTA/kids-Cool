import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./AppLayout/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NewsPosting from "./Pages/NewsPosting/NewsPosting";
import Teacher from "./Pages/Teacher/Teacher";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Galleryposting from "./Pages/Galleryposting/Galleryposting";
import AdmissionTable from "./Pages/AdmissionTable/AdmissionTable";
import ColdLead from "./Pages/ColdLead/ColdLead";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/newsposting" element={<NewsPosting/>}/>
          <Route path="/admin/teacherposting" element={<Teacher/>}/>
          <Route path="/admin/testimonial" element={<Testimonial/>}/>
          <Route path="/admin/gallery" element={<Galleryposting/>}/>
          <Route path="admin/admission-table" element={<AdmissionTable/>}/>
          <Route path="/admin/cold-lead" element={<ColdLead />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;