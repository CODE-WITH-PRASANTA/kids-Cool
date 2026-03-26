import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/kidslogo.png";
import pencil from "../../assets/menu-hover-icon.png";

import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);

  const menu = [
    { name: "Home", path: "/" },

    {
      name: "About",
      children: [
        { name: "Why Choose Us", path: "/why" },
        { name: "Our History", path: "/history" },
        { name: "Growing Stage", path: "/stage" },
      ],
    },

    { name: "Teachers", path: "/teachers" },
    { name: "Programms", path: "/programms" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
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

                  {item.path ? (
                    <Link to={item.path} className="nb-text">
                      {item.name}
                    </Link>
                  ) : (
                    <span className="nb-text">{item.name}</span>
                  )}
                </span>

                {/* DROPDOWN */}

                {item.children && (
                  <ul className="nb-dropdown">
                    {item.children.map((sub, j) => (
                      <li key={j}>
                        <Link to={sub.path}>{sub.name}</Link>
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

                  <span>+91 12345 67890</span>
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
                onClick={() => setMobileDrop(mobileDrop === i ? null : i)}
              >
                {item.name}
              </div>

              {/* MOBILE DROPDOWN */}

              {item.children && mobileDrop === i && (
                <ul className="nb-mobileSub">
                  {item.children.map((sub, j) => (
                    <li key={j}>
                      <Link to={sub.path}>{sub.name}</Link>
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
