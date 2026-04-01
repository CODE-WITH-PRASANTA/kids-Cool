import React, { useEffect, useState } from "react";
import "./FloatingIcons.css";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const FloatingIcons = () => {
  const base = "floatingIcons";
  const phoneNumber = "8280547763";
  const whatsappLink =
    "https://wa.me/918280547763?text=Hello%20Dream%20Flower%20Pre%20School,%20I%20want%20to%20know%20more%20about%20admission.";
  const callLink = `tel:${phoneNumber}`;

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 220);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={base}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base}__btn ${base}__btn--whatsapp`}
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        href={callLink}
        className={`${base}__btn ${base}__btn--call`}
        aria-label="Call now"
        title="Call Now"
      >
        <FaPhoneAlt />
      </a>

      <button
        type="button"
        className={`${base}__btn ${base}__btn--top} ${
          showTop ? `${base}__btn--visible` : `${base}__btn--hidden`
        }`}
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        title="Back to Top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default FloatingIcons;