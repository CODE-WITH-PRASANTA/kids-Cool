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
import ColdLeadTable from "./Pages/ColdLeadTable/ColdLeadTable";
import FeeCollection from "./Pages/FeeCollection/FeeCollection";
import FeeType from "./Pages/FeeType/FeeType";

import StudentAdmission from "./Pages/StudentAdmission/StudentAdmission";
import StudentAdmsnDetails from "./Pages/StudentAdmsnDetails/StudentAdmsnDetails";

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
          <Route path="/admin/cold-lead-table" element={<ColdLeadTable/>}/>
          <Route path="/fee-collect" element={<FeeCollection/>}/>
          <Route path="/fee-type" element={<FeeType/>}/>
          <Route path="/student/admission" element={<StudentAdmission/>}/>
          <Route path="/student/admission/details" element={<StudentAdmsnDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;