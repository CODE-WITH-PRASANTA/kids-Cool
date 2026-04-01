import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Teacher.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

/* import your teacher images here */
import teacher1 from "../../assets/teacher1.webp";
import teacher2 from "../../assets/teacher2.webp";
import teacher3 from "../../assets/teacher3.webp";
import teacher4 from "../../assets/teacher4.webp";
import teacher5 from "../../assets/teacher5.webp";
import teacher6 from "../../assets/teacher6.webp";

const Teacher = () => {
  const base = "teacherSection";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);

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
      name: "Ananya Sharma",
      role: "Early Learning Mentor",
      image: teacher1,
      description:
        "At Dream Flower Pre-School & Day Care, Ananya ma’am creates a warm and joyful classroom where children learn through stories, playful activities, communication practice, and gentle guidance. She helps little learners build confidence, language skills, classroom discipline, and a strong emotional connection with learning from the very beginning.",
    },
    {
      id: 2,
      name: "Meera Das",
      role: "Creative Activity Trainer",
      image: teacher2,
      description:
        "Meera ma’am makes every day colorful and exciting with art, craft, music, movement, and interactive classroom fun. Her teaching style encourages creativity, imagination, teamwork, and self-expression, helping children enjoy a playful learning journey while developing important early childhood skills in a happy environment.",
    },
    {
      id: 3,
      name: "Riya Sen",
      role: "Academic Growth Guide",
      image: teacher3,
      description:
        "Riya ma’am focuses on building strong learning foundations through phonics, numbers, speaking activities, and concept-based teaching. With personal care and patient support, she helps children improve attention, understanding, social interaction, and readiness for the next stage of school life with confidence and comfort.",
    },
    {
      id: 4,
      name: "Pooja Verma",
      role: "Storytelling & Language Coach",
      image: teacher4,
      description:
        "Pooja ma’am brings stories, conversations, and expressive speaking activities into the classroom to help children develop vocabulary, listening skills, imagination, and confidence. Her engaging teaching style makes every learning session lively, interactive, and enjoyable for young learners.",
    },
    {
      id: 5,
      name: "Neha Kapoor",
      role: "Art & Activity Teacher",
      image: teacher5,
      description:
        "Neha ma’am encourages children to explore colors, shapes, crafts, and hands-on creative work through joyful activity sessions. She helps students improve fine motor skills, concentration, self-expression, and imagination while making every classroom moment bright and exciting.",
    },
    {
      id: 6,
      name: "Rahul Nanda",
      role: "Play & Development Guide",
      image: teacher6,
      description:
        "Rahul sir supports children through play-based learning, movement activities, and confidence-building routines that strengthen teamwork, discipline, and social interaction. His caring approach helps every child feel comfortable, active, valued, and motivated to participate with joy.",
    },
  ];

  const activeTeacher = teachers[currentTeacher];
  const cardsPerPage = 3;
  const totalDesktopPages = Math.ceil(teachers.length / cardsPerPage);

  const desktopTeachers = useMemo(() => {
    const start = desktopPage * cardsPerPage;
    return teachers.slice(start, start + cardsPerPage);
  }, [desktopPage]);

  const handlePrev = () => {
    setCurrentTeacher((prev) => (prev === 0 ? teachers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTeacher((prev) => (prev === teachers.length - 1 ? 0 : prev + 1));
  };

  const handleDesktopPrev = () => {
    setDesktopPage((prev) => (prev === 0 ? totalDesktopPages - 1 : prev - 1));
  };

  const handleDesktopNext = () => {
    setDesktopPage((prev) => (prev === totalDesktopPages - 1 ? 0 : prev + 1));
  };

  const renderTeacherCard = (teacher, index, isMobile = false) => (
    <article
      key={teacher.id}
      className={`${base}__card ${
        visible ? `${base}__card--visible` : ""
      } ${isMobile ? `${base}__card--mobile` : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`${base}__imageWrap`}>
        <span
          className={`${base}__dotDecor ${base}__dotDecor--left`}
          aria-hidden="true"
        ></span>

        <div className={`${base}__imageBlob`}>
          <img src={teacher.image} alt={teacher.name} />
        </div>

        <div
          className={`${base}__arrow ${
            index % 2 === 1 ? `${base}__arrow--bottom` : `${base}__arrow--top`
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 170 70" fill="none">
            <path
              d={
                index % 2 === 1
                  ? "M12 20c20 22 35 22 50 8 14-14 28-14 44 1 17 16 31 16 50 2"
                  : "M12 56c19-23 35-23 50-8 14 13 28 13 44-2 16-15 31-15 50-2"
              }
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="3 5"
            />
            <path
              d={
                index % 2 === 1
                  ? "M148 24l8 7-10 3"
                  : "M148 50l8-7-10-3"
              }
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className={`${base}__contentBox`}>
        <p className={`${base}__role`}>{teacher.role}</p>
        <h3 className={`${base}__name`}>{teacher.name}</h3>
        <p className={`${base}__text`}>{teacher.description}</p>

        <p className={`${base}__extraInfo`}>
          Caring teachers, joyful classrooms, playful activities, and strong
          early learning foundations make Dream Flower Pre-School a wonderful
          place for every child to grow with confidence.
        </p>

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
  );

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__container`}>
        <div className={`${base}__header`}>
          <div
            className={`${base}__topIcon ${base}__topIcon--left`}
            aria-hidden="true"
          >
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

              <p className={`${base}__subTitle`}>
                Meet Our Professional Educators
              </p>
            </div>

            <h2 className={`${base}__title`}>Teachers &amp; Trainers</h2>

            <p className={`${base}__desc`}>
              At Dream Flower Pre-School & Day Care, our experienced and caring
              teachers create a joyful, safe, and inspiring learning environment
              where every child feels valued, supported, and encouraged to
              explore.
            </p>
          </div>
        </div>

        <div className={`${base}__sliderWrap`}>
          <div className={`${base}__desktopSlider`}>
            <div className={`${base}__desktopTopControls`}>
              <button
                type="button"
                className={`${base}__desktopNavBtn`}
                onClick={handleDesktopPrev}
                aria-label="Previous teacher page"
              >
                ‹
              </button>

              <div className={`${base}__desktopDots`}>
                {Array.from({ length: totalDesktopPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${base}__desktopDot ${
                      desktopPage === index ? `${base}__desktopDot--active` : ""
                    }`}
                    onClick={() => setDesktopPage(index)}
                    aria-label={`Go to teacher page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className={`${base}__desktopNavBtn`}
                onClick={handleDesktopNext}
                aria-label="Next teacher page"
              >
                ›
              </button>
            </div>

            <div className={`${base}__desktopGrid`}>
              {desktopTeachers.map((teacher, index) =>
                renderTeacherCard(teacher, index)
              )}
            </div>
          </div>

          <div className={`${base}__mobileSlider`}>
            <div className={`${base}__controls`}>
              <button
                type="button"
                className={`${base}__navBtn`}
                onClick={handlePrev}
                aria-label="Previous teacher"
              >
                ‹
              </button>

              <div className={`${base}__dots`}>
                {teachers.map((teacher, index) => (
                  <button
                    key={teacher.id}
                    type="button"
                    className={`${base}__dot ${
                      currentTeacher === index ? `${base}__dot--active` : ""
                    }`}
                    onClick={() => setCurrentTeacher(index)}
                    aria-label={`Go to ${teacher.name}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className={`${base}__navBtn`}
                onClick={handleNext}
                aria-label="Next teacher"
              >
                ›
              </button>
            </div>

            <div className={`${base}__cards`}>
              {renderTeacherCard(activeTeacher, currentTeacher, true)}
            </div>
          </div>
        </div>

        <div
          className={`${base}__sideDecor ${base}__sideDecor--left`}
          aria-hidden="true"
        >
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

        <div
          className={`${base}__sideDecor ${base}__sideDecor--right`}
          aria-hidden="true"
        >
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