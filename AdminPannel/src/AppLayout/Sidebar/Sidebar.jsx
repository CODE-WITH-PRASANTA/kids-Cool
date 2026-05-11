import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

import {
  FaHome,
  FaNewspaper,
  FaImages,
  FaChalkboardTeacher,
  FaUserTie,
  FaCommentDots,
  FaChevronDown,
  FaMoneyBillWave,
  FaUserGraduate,
  FaClipboardList,
  FaQuoteLeft,
} from "react-icons/fa";

import {
  FiCheckSquare,
  FiCreditCard,
  FiSettings,
  FiBookOpen,
  FiEdit,
  FiLayers,
  FiBriefcase,
} from "react-icons/fi";

import "./Sidebar.css";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const menu = [

    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },

    {
      name: "Cold Lead",
      path: "/admin/cold-lead",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "Cold Lead Table",
      path: "/admin/cold-lead-table",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "News Posting",
      path: "/admin/newsposting",
      icon: <FaNewspaper />,
    },

    {
      name: "Teacher Posting",
      path: "/admin/teacherposting",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "Testimonial",
      path: "/admin/testimonial",
      icon: <FaQuoteLeft />,
    },

    {
      name: "Gallery Posting",
      path: "/admin/gallery",
      icon: <FaImages />,
    },

    {
      name: "Admission Table",
      path: "/admin/admission-table",
      icon: <FaImages />,
    },

    {
      type: "section",
      label: "ERP Solution",
    },

    /* =========================
       STUDENT HUB
    ========================= */

    {
      name: "Student Hub",
      icon: <FaUserGraduate />,
      submenu: [
        {
          name: "Student Admission",
          path: "/student/admission",
          icon: <FaClipboardList />,
        },

        {
          name: "Student Details",
          path: "/student/admission/details",
          icon: <FaUserTie />,
        },
      ],
    },

    /* =========================
       STUDENT PAYTRACK
    ========================= */

    {
    
  name: "Student Paytrack",
  icon: <FaCommentDots />,
  submenu: [
    {
      name: "Fee Collect",
      path: "/fee-collect",
      icon: <FaMoneyBillWave />,
    },

    {
      name: "Wallet",
      path: "/wallet",
      icon: <FaMoneyBillWave />,
    },

    {
      name: "Fee Type",
      path: "/fee-type",
      icon: <FaMoneyBillWave />,
    },

    {
      name: "Payment Receipt",
      path: "/payment-receipt",
      icon: <FaMoneyBillWave />,
    },
  ],
},

    /* =========================
       CLASS MANAGEMENT
    ========================= */

    // {
    //   name: "Class Post",
    //   path: "/class-post",
    //   icon: <FiBookOpen />,
    // },

    // {
    //   name: "Subject Post",
    //   path: "/subject-post",
    //   icon: <FiEdit />,
    // },

    // {
    //   name: "Classwise Subject",
    //   path: "/classwise-subject",
    //   icon: <FiLayers />,
    // },

    // /* =========================
    //    RBAC MANAGEMENT
    // ========================= */

    // {
    //   name: "RBAC Management",
    //   icon: <FiSettings />,
    //   submenu: [
    //     {
    //       name: "Create Teacher",
    //       path: "/admin/create-teacher",
    //     },

    //     {
    //       name: "Create Permission",
    //       path: "/admin/create-permission",
    //     },

    //     {
    //       name: "Attendance Management",
    //       path: "/admin/attendance-management",
    //     },

    //     {
    //       name: "Leave Management",
    //       path: "/admin/leave-management",
    //     },

    //     {
    //       name: "Payroll Management",
    //       path: "/admin/payroll-management",
    //     },
    //   ],
    // },

    // /* =========================
    //    EXAM RESULT
    // ========================= */

    // {
    //   name: "Exam Result Desk",
    //   icon: <FiBriefcase />,
    //   submenu: [
    //     {
    //       name: "Exam Result",
    //       path: "/exam-result",
    //     },

    //     {
    //       name: "Exam Score Manager",
    //       path: "/exam-result-manager",
    //     },

    //     {
    //       name: "Type of Exam Publish",
    //       path: "/exam-type",
    //     },

    //     {
    //       name: "Progress Report Card",
    //       path: "/exam-report",
    //     },
    //   ],
    // },

    // /* =========================
    //    ATTENDANCE
    // ========================= */

    // {
    //   name: "Attendance",
    //   icon: <FiCheckSquare />,
    //   submenu: [
    //     {
    //       name: "Student Attendance",
    //       path: "/attendance/student-attendance",
    //     },

    //     {
    //       name: "Student Leave",
    //       path: "/attendance/student-leave",
    //     },

    //     {
    //       name: "Attendance Report",
    //       path: "/attendance/attendance-report",
    //     },
    //   ],
    // },

    /* =========================
       EXPENSE
    ========================= */

    {
      name: "Expense",
      icon: <FiCreditCard />,
      submenu: [
        {
          name: "Add Expense",
          path: "/expense/details",
        },

        {
          name: "Expense Search",
          path: "/expense-search",
        },

        {
          name: "Expense Head",
          path: "/expense-head",
        },
      ],
    },
  ];

  const [openMenu, setOpenMenu] = useState(null);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 1024
  );

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  const toggleMenu = (name) => {
    setOpenMenu(
      openMenu === name ? null : name
    );
  };

  const handleMenuClick = () => {

    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {sidebarOpen && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      <aside
        className={`admin-sidebar ${
          sidebarOpen ? "open" : "close"
        }`}
      >

        {/* ================= HEADER ================= */}

        <div className="sidebar-header">

          <div className="sidebar-brand">

            <div className="sidebar-brand-icon">
              A
            </div>

            {sidebarOpen && (
              <div className="sidebar-brand-text">
                <h2>Admin Panel</h2>
                <p>Management System</p>
              </div>
            )}
          </div>
        </div>

        {/* ================= MENU ================= */}

        <nav className="sidebar-menu">

          {menu.map((item, index) => {

            /* SECTION */

            if (item.type === "section") {
              return sidebarOpen ? (
                <div
                  className="sidebar-section"
                  key={`${item.label}-${index}`}
                >
                  {item.label}
                </div>
              ) : null;
            }

            return (

              <div
                className="sidebar-menu-item"
                key={item.path || item.name || index}
              >

                {/* ================= SUBMENU ================= */}

                {item.submenu ? (
                  <>

                    <button
                      type="button"
                      className={`menu-btn ${
                        openMenu === item.name
                          ? "expanded"
                          : ""
                      }`}
                      onClick={() =>
                        toggleMenu(item.name)
                      }
                    >

                      <div className="menu-main">

                        <span className="menu-icon">
                          {item.icon}
                        </span>

                        {sidebarOpen && (
                          <span className="menu-text">
                            {item.name}
                          </span>
                        )}
                      </div>

                      {sidebarOpen && (
                        <span
                          className={`menu-arrow ${
                            openMenu === item.name
                              ? "rotate"
                              : ""
                          }`}
                        >
                          <FaChevronDown />
                        </span>
                      )}
                    </button>

                    {/* SUBMENU ITEMS */}

                    {openMenu === item.name &&
                      sidebarOpen && (

                      <div className="submenu">

                        {item.submenu.map(
                          (sub, subIndex) => (

                          <NavLink
                            key={
                              sub.path ||
                              `${sub.name}-${subIndex}`
                            }
                            to={sub.path}
                            onClick={
                              handleMenuClick
                            }
                            className={({
                              isActive,
                            }) =>
                              `submenu-link ${
                                isActive
                                  ? "active"
                                  : ""
                              }`
                            }
                          >

                            {sub.icon && (
                              <span className="submenu-icon">
                                {sub.icon}
                              </span>
                            )}

                            <span className="submenu-text">
                              {sub.name}
                            </span>

                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (

                  /* ================= NORMAL MENU ================= */

                  <NavLink
                    to={item.path}
                    onClick={handleMenuClick}
                    className={({ isActive }) =>
                      `menu-link ${
                        isActive
                          ? "active"
                          : ""
                      }`
                    }
                  >

                    <div className="menu-main">

                      <span className="menu-icon">
                        {item.icon}
                      </span>

                      {sidebarOpen && (
                        <span className="menu-text">
                          {item.name}
                        </span>
                      )}
                    </div>
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}