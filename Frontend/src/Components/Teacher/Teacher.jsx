import React, { useEffect, useRef, useState } from "react";
import "./Teacher.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Teacher = () => {
  const base = "teacherSection";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(current);
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const teachers = [
    {
      id: 1,
      name: "Sarah Michelle",
      role: "Language Mentor",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      description:
        "Sit amet nisl suscipit adipiscing bibendum est. Aliquam ultrices sagittis orci a scelerisque purus.",
    },
    {
      id: 2,
      name: "Mary Grace",
      role: "Creative Trainer",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
      description:
        "Bibendum ut tristique et egestas quis ipsum suspendisse. Euismod quis viverra nibh cras pulvinar mattis nunc.",
    },
    {
      id: 3,
      name: "Emma Grace",
      role: "Academic Coach",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
      description:
        "Vellentesque tristique tincidunt massa in faucibus. Sed est erat, pharetra id tortor ut, lacinia molestie ligula.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__container`}>
        <div className={`${base}__header`}>
          <div className={`${base}__topIcon ${base}__topIcon--left`} aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none">
              <g
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="60" cy="40" r="12" />
                <path d="M42 72c4-12 14-18 18-18s14 6 18 18" />
                <circle cx="43" cy="73" r="10" />
                <path d="M30 95c2-9 9-13 13-13s11 4 13 13" />
                <path d="M24 31l-7-2" />
                <path d="M29 20l-5-6" />
                <path d="M40 13l-1-8" />
                <path d="M82 31l7-2" />
                <path d="M78 20l5-6" />
                <path d="M67 13l1-8" />
              </g>
            </svg>
          </div>

          <div className={`${base}__heading`}>
            <div className={`${base}__tagRow`}>
              <span className={`${base}__stars`}>★ ★</span>

              <span className={`${base}__capIcon`} aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path
                    d="M4 12.5 16 7l12 5.5L16 18 4 12.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16v5c0 1 3.1 3 6 3s6-2 6-3v-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <p className={`${base}__subTitle`}>Meet Our Professional</p>
            </div>

            <h2 className={`${base}__title`}>Teachers &amp; Trainers</h2>

            <p className={`${base}__desc`}>
              Chasellus gravida lacus quis eros lobortis, nec dapibus quam
              gravida. Duis sed augue vitae felis pellentesque varius nec quis
              nunc. Morbi mauris augue, pulvinar quis luctus eget.
            </p>
          </div>
        </div>

        <div className={`${base}__cards`}>
          {teachers.map((teacher, index) => (
            <article
              className={`${base}__card ${base}__card--${index + 1}`}
              key={teacher.id}
            >
              <div className={`${base}__imageWrap`}>
                <span
                  className={`${base}__dot ${base}__dot--left`}
                  aria-hidden="true"
                ></span>

                <div className={`${base}__imageBlob`}>
                  <img src={teacher.image} alt={teacher.name} />
                </div>

                <div
                  className={`${base}__arrow ${base}__arrow--${
                    index === 1 ? "bottom" : "top"
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 170 70" fill="none">
                    <path
                      d={
                        index === 1
                          ? "M12 20c20 22 35 22 50 8 14-14 28-14 44 1 17 16 31 16 50 2"
                          : "M12 56c19-23 35-23 50-8 14 13 28 13 44-2 16-15 31-15 50-2"
                      }
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeDasharray="3 5"
                    />
                    <path
                      d={index === 1 ? "M148 24l8 7-10 3" : "M148 50l8-7-10-3"}
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className={`${base}__contentBox`}>
                <h3 className={`${base}__name`}>{teacher.name}</h3>
                <p className={`${base}__text`}>{teacher.description}</p>

                <div className={`${base}__socials`}>
                  <a href="/" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="/" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="/" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`${base}__sideDecor ${base}__sideDecor--left`} aria-hidden="true">
          <span className={`${base}__robot`}>
            <svg viewBox="0 0 70 70" fill="none">
              <rect x="20" y="20" width="28" height="24" rx="7" fill="#43587d" />
              <circle cx="30" cy="32" r="4" fill="#fff" />
              <circle cx="39" cy="32" r="4" fill="#ff4f7d" />
              <path d="M34 15v6" stroke="#43587d" strokeWidth="3" strokeLinecap="round" />
              <circle cx="34" cy="11" r="3" fill="#43587d" />
              <path d="M12 35c9-4 17-5 27-3" stroke="#ff7a9d" strokeWidth="2.4" strokeDasharray="2 4" />
              <path d="M18 19l5 3M12 26l6 1M17 51l6-4M48 18l5-4M54 26l6 1M48 51l5-4" stroke="#43587d" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        <div className={`${base}__sideDecor ${base}__sideDecor--right`} aria-hidden="true">
          <span className={`${base}__robot`}>
            <svg viewBox="0 0 70 70" fill="none">
              <rect x="20" y="20" width="28" height="24" rx="7" fill="#43587d" />
              <circle cx="30" cy="32" r="4" fill="#fff" />
              <circle cx="39" cy="32" r="4" fill="#ff4f7d" />
              <path d="M34 15v6" stroke="#43587d" strokeWidth="3" strokeLinecap="round" />
              <circle cx="34" cy="11" r="3" fill="#43587d" />
              <path d="M31 32h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 35c9 4 17 5 27 3" stroke="#ff7a9d" strokeWidth="2.4" strokeDasharray="2 4" />
              <path d="M18 19l5 3M12 26l6 1M17 51l6-4M48 18l5-4M54 26l6 1M48 51l5-4" stroke="#43587d" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        <div className={`${base}__bottomPattern`} aria-hidden="true">
          <svg viewBox="0 0 900 40" fill="none" preserveAspectRatio="none">
            <path
              d="M0 30c10-20 20-20 30 0s20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0 20 20 30 0 20-20 30 0"
              stroke="#0f7c90"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Teacher;