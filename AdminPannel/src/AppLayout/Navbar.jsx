import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaBars,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

// import "./Navbar.css";

export default function Navbar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const [openProfile, setOpenProfile] =
    useState(false);

  const navigate = useNavigate();

  /* ===============================
     TOGGLE SIDEBAR
  =============================== */

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  /* ===============================
     LOGOUT
  =============================== */

  const handleLogout = () => {

    // REMOVE LOGIN DATA
    localStorage.removeItem("adminLogin");

    // CLOSE DROPDOWN
    setOpenProfile(false);

    // REDIRECT LOGIN PAGE
    navigate("/login");
  };

  /* ===============================
     PROFILE PAGE
  =============================== */

  const handleGoToProfile = () => {

    navigate("/admin/profile");

    setOpenProfile(false);
  };

  /* ===============================
     SETTINGS PAGE
  =============================== */

  const handleGoToSettings = () => {

    navigate("/admin/settings");

    setOpenProfile(false);
  };

  return (
    <header className="admin-navbar">

      {/* ===============================
          LEFT SIDE
      =============================== */}

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <h2 className="navbar-title">
          Admin Dashboard
        </h2>

      </div>

      {/* ===============================
          RIGHT SIDE PROFILE
      =============================== */}

      <div className="navbar-profile">

        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="profile-img"
          onClick={() =>
            setOpenProfile(!openProfile)
          }
        />

        {/* ===============================
            DROPDOWN
        =============================== */}

        {openProfile && (

          <div className="profile-dropdown">

            {/* PROFILE */}

            <button
              className="dropdown-item"
              onClick={handleGoToProfile}
            >

              <FaUser />

              <span>Profile</span>

            </button>

            {/* SETTINGS */}

            <button
              className="dropdown-item"
              onClick={handleGoToSettings}
            >

              <FaCog />

              <span>Settings</span>

            </button>

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="dropdown-item logout"
            >

              <FaSignOutAlt />

              <span>Logout</span>

            </button>

          </div>
        )}
      </div>
    </header>
  );
}