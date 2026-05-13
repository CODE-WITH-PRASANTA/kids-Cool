import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* ===============================
   LAYOUT
=============================== */

import AdminLayout from "./AppLayout/AdminLayout";

/* ===============================
   PROTECTED ROUTE
=============================== */

import Protected from "./Pages/Protected/Protected";

/* ===============================
   LOGIN
=============================== */

import LoginForm from "./Pages/LoginForm/LoginForm";

/* ===============================
   DASHBOARD
=============================== */

import Dashboard from "./Pages/Dashboard/Dashboard";

/* ===============================
   NEWS
=============================== */

import NewsPosting from "./Pages/NewsPosting/NewsPosting";

/* ===============================
   TEACHER
=============================== */

import Teacher from "./Pages/Teacher/Teacher";

/* ===============================
   TESTIMONIAL
=============================== */

import Testimonial from "./Pages/Testimonial/Testimonial";

/* ===============================
   GALLERY
=============================== */

import Galleryposting from "./Pages/Galleryposting/Galleryposting";

/* ===============================
   ADMISSION
=============================== */

import AdmissionTable from "./Pages/AdmissionTable/AdmissionTable";

/* ===============================
   COLD LEAD
=============================== */

import ColdLead from "./Pages/ColdLead/ColdLead";

import ColdLeadTable from "./Pages/ColdLeadTable/ColdLeadTable";

/* ===============================
   FEES
=============================== */

import FeeCollection from "./Pages/FeeCollection/FeeCollection";

import FeeType from "./Pages/FeeType/FeeType";

/* ===============================
   STUDENT
=============================== */

import StudentAdmission from "./Pages/StudentAdmission/StudentAdmission";

import StudentAdmsnDetails from "./Pages/StudentAdmsnDetails/StudentAdmsnDetails";

/* ===============================
   WALLET
=============================== */

import Wallet from "./Pages/Wallet/Wallet";

import CollectMoney from "./Pages/CollectMoney/CollectMoney";

/* ===============================
   EXPENSE
=============================== */

import AddExpense from "./Pages/AddExpense/AddExpense";

import ExpenseHead from "./Pages/ExpenseHead/ExpenseHead";

import ExpenseList from "./Pages/ExpenseList/ExpenseList";

import ExpenseSearch from "./Pages/ExpenseSearch/ExpenseSearch";

const App = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* ===============================
            LOGIN PAGE
        =============================== */}

        <Route
          path="/login"
          element={<LoginForm />}
        />

        {/* ===============================
            PROTECTED ADMIN ROUTES
        =============================== */}

        <Route
          path="/"
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >

          {/* ===============================
              DASHBOARD
          =============================== */}

          <Route
            index
            element={<Dashboard />}
          />

          {/* ===============================
              NEWS
          =============================== */}

          <Route
            path="admin/newsposting"
            element={<NewsPosting />}
          />

          {/* ===============================
              TEACHER
          =============================== */}

          <Route
            path="admin/teacherposting"
            element={<Teacher />}
          />

          {/* ===============================
              TESTIMONIAL
          =============================== */}

          <Route
            path="admin/testimonial"
            element={<Testimonial />}
          />

          {/* ===============================
              GALLERY
          =============================== */}

          <Route
            path="admin/gallery"
            element={<Galleryposting />}
          />

          {/* ===============================
              ADMISSION TABLE
          =============================== */}

          <Route
            path="admin/admission-table"
            element={<AdmissionTable />}
          />

          {/* ===============================
              COLD LEAD
          =============================== */}

          <Route
            path="admin/cold-lead"
            element={<ColdLead />}
          />

          <Route
            path="admin/cold-lead-table"
            element={<ColdLeadTable />}
          />

          {/* ===============================
              FEES
          =============================== */}

          <Route
            path="fee-collect"
            element={<FeeCollection />}
          />

          <Route
            path="fee-type"
            element={<FeeType />}
          />

          {/* ===============================
              STUDENT
          =============================== */}

          <Route
            path="student/admission"
            element={<StudentAdmission />}
          />

          <Route
            path="student/admission/details"
            element={<StudentAdmsnDetails />}
          />

          {/* ===============================
              WALLET
          =============================== */}

          <Route
            path="wallet"
            element={<Wallet />}
          />

          <Route
            path="collect-money"
            element={<CollectMoney />}
          />

          {/* ===============================
              EXPENSE
          =============================== */}

          <Route
            path="expense/details"
            element={<AddExpense />}
          />

          <Route
            path="expense-head"
            element={<ExpenseHead />}
          />

          <Route
            path="expense-list"
            element={<ExpenseList />}
          />

          <Route
            path="expense-search"
            element={<ExpenseSearch />}
          />

        </Route>

        {/* ===============================
            INVALID ROUTES
        =============================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;