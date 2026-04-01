import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/Logo1.JPG";
import pencil from "../../assets/menu-hover-icon.png";

import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  const menu = [
    { name: "Home", id: "home" },

    {
      name: "About",
      children: [
        { name: "Why Choose Us", id: "why" },
        { name: "Our History", id: "history" },
        { name: "Our Facility", id: "facility" },
        { name: "Growing Stage", id: "stage" },
      ],
    },

    { name: "Teachers", id: "teachers" },
    { name: "Programms", id: "programms" },
    { name: "Gallery", id: "gallery" },
    { name: "News", id: "news" },
    { name: "Testimonial", id: "testimonial" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="nb-navbar">
        <div className="nb-container">
          {/* LOGO */}

          <img src={logo} className="nb-logo" alt="" />

          {/* DESKTOP MENU */}

          <ul className="nb-menu">
            {menu.map((item, i) => (
              <li key={i} className="nb-item">
                <span className="nb-inner">
                  <img src={pencil} className="nb-hoverIcon" />

                  <span
                    className="nb-text"
                    onClick={() => item.id && scrollToSection(item.id)}
                  >
                    {item.name}
                  </span>
                </span>

                {/* DROPDOWN */}

                {item.children && (
                  <ul className="nb-dropdown">
                    {item.children.map((sub, j) => (
                      <li key={j}>
                        <span onClick={() => scrollToSection(sub.id)}>
                          {sub.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}

          <div className="nb-right">
            <div className="nb-callBox">
              <a href="tel:+911234567890" className="nb-btn">
                Call Now
                <div className="nb-number">
                  <Phone size={14} />

                  <span>+91 8280547763</span>
                </div>
              </a>

              {/* <div className="nb-number">
                <Phone size={14} />

                <span>+91 12345 67890</span>
              </div> */}
            </div>

            {/* MENU ICON */}

            <Menu className="nb-menuIcon" onClick={() => setOpen(true)} />
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div className={`nb-mobile ${open ? "show" : ""}`}>
        <div className="nb-mobileTop">
          <img src={logo} className="nb-mobileLogo" />

          <X onClick={() => setOpen(false)} />
        </div>

        <ul>
          {menu.map((item, i) => (
            <li key={i}>
              {/* MAIN ITEM */}

              <div
                className="nb-mobileItem"
                onClick={() => {
                  if (item.children) {
                    setMobileDrop(mobileDrop === i ? null : i);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.name}
              </div>

              {/* MOBILE DROPDOWN */}

              {item.children && mobileDrop === i && (
                <ul className="nb-mobileSub">
                  {item.children.map((sub, j) => (
                    <li key={j}>
                      <span onClick={() => scrollToSection(sub.id)}>
                        {sub.name}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}

      {open && <div className="nb-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
