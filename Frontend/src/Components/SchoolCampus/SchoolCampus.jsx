import React, { useEffect, useMemo, useRef, useState } from "react";
import "./SchoolCampus.css";

import classroomImg from "../../assets/Classroom.webp";
import transportImg from "../../assets/Transpot.webp";
import playAreaImg from "../../assets/Playarea.webp";
import healthyFoodImg from "../../assets/Healthyfood.webp";
import girlReadingImg from "../../assets/studys.webp";
import boyCycleImg from "../../assets/cycle.webp";

const SchoolCampus = () => {
  const base = "schoolCampus";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

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
      { threshold: 0.12 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const campusCards = [
    {
      id: 1,
      title: "Smart Classrooms",
      image: classroomImg,
      desc: "Spacious, well-ventilated, and technology-enabled classrooms designed for interactive and activity-based learning, making us a leading play school in Bhubaneswar.",
      theme: "teal",
      iconType: "book",
    },
    {
      id: 2,
      title: "Safe Transport Facility",
      image: transportImg,
      desc: "Reliable and secure school transport with proper safety measures, making it convenient for parents looking for a pre school with transport in Bhubaneswar.",
      theme: "purple",
      iconType: "bus",
    },
    {
      id: 3,
      title: "Indoor & Outdoor Play Area",
      image: playAreaImg,
      desc: "Dedicated play zones that promote physical activity, creativity, and social interaction—essential for early childhood growth in a top pre school in Bhubaneswar.",
      theme: "teal",
      iconType: "play",
    },
    {
      id: 4,
      title: "Healthy & Nutritious Food",
      image: healthyFoodImg,
      desc: "We ensure children receive healthy, hygienic, and balanced meals, supporting their physical and mental development at our day care center in Bhubaneswar.",
      theme: "teal",
      iconType: "leaf",
    },

    {
      id: 5,
      title: "Activity & Creative Zones",
      image: playAreaImg,
      desc: "Special spaces for Yoga, Art, Dance, and creative activities, helping children build confidence, coordination, and imagination.",
      theme: "teal",
      iconType: "play",
    },
    {
      id: 6,
      title: "Safe & Hygienic Environment",
      image: healthyFoodImg,
      desc: "We maintain a clean, secure, and child-friendly campus with proper hygiene standards, making us a trusted day care in Bhubaneswar for working parents.",
      theme: "teal",
      iconType: "leaf",
    },

    {
      id: 7,
      title: "Experienced & Caring Staff",
      image: transportImg,
      desc: "Our trained teachers and caregivers ensure personalized attention, making us one of the best nursery schools in Bhubaneswar.",
      theme: "purple",
      iconType: "bus",
    },
    {
      id: 8,
      title: "Activity-Based Learning Infrastructure",
      image: playAreaImg,
      desc: "We provide a structured setup that supports play-based and experiential learning, helping children develop communication, social, and cognitive skills.",
      theme: "teal",
      iconType: "play",
    },

    
  ];

  const stats = [
    { id: 1, count: "100+", label: "Students Admission", icon: "schoolbag" },
    { id: 2, count: "5+", label: "Total No.of Class", icon: "cup" },
    { id: 3, count: "10+", label: "No.of Teachers", icon: "bag" },
    { id: 4, count: "2+", label: "Years Experience", icon: "pencil" },
  ];

// ✅ dynamic cards per page
const [cardsPerPage, setCardsPerPage] = useState(4);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setCardsPerPage(2); // mobile
    } else {
      setCardsPerPage(4); // desktop
    }

    setCurrentPage(0); // reset page on resize (important)
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// ✅ total pages
const totalPages = Math.ceil(campusCards.length / cardsPerPage);

// ✅ paginated cards
const paginatedCards = useMemo(() => {
  const start = currentPage * cardsPerPage;
  return campusCards.slice(start, start + cardsPerPage);
}, [currentPage, cardsPerPage]);

// ✅ prev
const handlePrev = () => {
  setCurrentPage((prev) =>
    prev === 0 ? totalPages - 1 : prev - 1
  );
};

// ✅ next
const handleNext = () => {
  setCurrentPage((prev) =>
    prev === totalPages - 1 ? 0 : prev + 1
  );
};

  const renderFacilityIcon = (type) => {
    switch (type) {
      case "book":
        return (
          <svg viewBox="0 0 64 64" className={`${base}__facilitySvg`}>
            <path
              d="M14 16c0-3 2-5 5-5h25c3 0 6 2 6 5v28c0 2-2 4-4 4H22c-4 0-8 2-8 5V16z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 48V15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M28 21h14M28 28h14M28 35h10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
        );

      case "bus":
        return (
          <svg viewBox="0 0 64 64" className={`${base}__facilitySvg`}>
            <rect
              x="13"
              y="17"
              width="38"
              height="25"
              rx="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
            />
            <path
              d="M20 17v-4h24v4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M18 27h28M22 22h8M34 22h10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <circle
              cx="23"
              cy="45"
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
            />
            <circle
              cx="41"
              cy="45"
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
            />
          </svg>
        );

      case "play":
        return (
          <svg viewBox="0 0 64 64" className={`${base}__facilitySvg`}>
            <path
              d="M18 50V28l14-12 14 12v22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 16v34"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M18 32h28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M46 50l8-10M22 50l-8-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 64 64" className={`${base}__facilitySvg`}>
            <path
              d="M32 51c-10-7-17-14-17-24 0-6 4-10 10-10 4 0 6 2 7 4 1-2 3-4 7-4 6 0 10 4 10 10 0 10-7 17-17 24z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 33c2 0 4-2 6-6 1 5 3 7 5 7 2 0 3-1 4-3h5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  const renderStatIcon = (type) => {
    switch (type) {
      case "schoolbag":
        return (
          <svg viewBox="0 0 64 64" className={`${base}__statSvg`}>
            <rect x="18" y="19" width="28" height="30" rx="8" fill="#7a7a7a" />
            <path
              d="M24 20v-4c0-4 3-6 8-6s8 2 8 6v4"
              fill="none"
              stroke="#303030"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M18 28h28"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.3"
            />
            <circle cx="32" cy="34" r="6" fill="#ffffff" opacity="0.95" />
          </svg>
        );

      case "cup":
        return (
          <svg viewBox="0 0 64 64" className={`${base}__statSvg`}>
            <path
              d="M20 17h24v18c0 7-5 12-12 12s-12-5-12-12V17z"
              fill="#5fa7ff"
            />
            <path
              d="M44 21h4c4 0 6 2 6 6s-3 7-8 7h-2"
              fill="none"
              stroke="#2f5c9f"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <path
              d="M22 50h20"
              fill="none"
              stroke="#f19a2a"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        );

      case "bag":
        return (
          <svg viewBox="0 0 64 64" className={`${base}__statSvg`}>
            <rect x="20" y="19" width="24" height="27" rx="6" fill="#ffb347" />
            <path
              d="M25 20v-3c0-3 2-5 7-5s7 2 7 5v3"
              fill="none"
              stroke="#9b5814"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M20 28h24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
            />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 64 64" className={`${base}__statSvg`}>
            <path d="M21 43l9-23h5l-9 23z" fill="#ff8358" />
            <path d="M34 43l9-23h5l-9 23z" fill="#9fd45b" />
          </svg>
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__top`}>
        <div className={`${base}__bgStars`}>
          <div className={`${base}__starWrap ${base}__starWrap--left`}>
            <svg viewBox="0 0 120 120" className={`${base}__cuteStar`}>
              <path d="M60 14l10 23 25 3-18 17 5 25-22-12-22 12 5-25-18-17 25-3 10-23z" fill="#b6d2dc" />
              <circle cx="48" cy="55" r="2.7" fill="#4d6972" />
              <circle cx="67" cy="55" r="2.7" fill="#4d6972" />
              <path d="M50 66c4 4 10 4 14 0" fill="none" stroke="#4d6972" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M88 31c10 4 18 12 22 24" fill="none" stroke="#f28c7c" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M84 24c13 3 24 13 29 28" fill="none" stroke="#e6a090" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M79 17c15 2 28 14 34 32" fill="none" stroke="#d5e8ef" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className={`${base}__planetWrap`}>
            <svg viewBox="0 0 180 120" className={`${base}__planet`}>
              <circle cx="95" cy="56" r="28" fill="#b85d29" />
              <ellipse cx="93" cy="60" rx="54" ry="16" fill="none" stroke="#84b8c4" strokeWidth="2.4" />
              <ellipse cx="93" cy="60" rx="44" ry="12" fill="none" stroke="#f4c7a5" strokeWidth="2.4" />
              <ellipse cx="93" cy="60" rx="36" ry="10" fill="none" stroke="#3a2d29" strokeWidth="2.4" />
            </svg>
          </div>
        </div>

        <div className={`${base}__container`}>
          <header className={`${base}__headingWrap`}>
            <div className={`${base}__miniIcon`}>
              <svg viewBox="0 0 64 64">
                <path
                  d="M16 25l16-10 16 10-16 10-16-10zM21 31v8c0 5 6 10 11 10s11-5 11-10v-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className={`${base}__tag`}>School Facilities</p>
            <h2 className={`${base}__title`}>
              Engaging &amp; Spacious School Campus
            </h2>
            <p className={`${base}__subtitle`}>
              At Dream Flower Pre School & Day Care, we provide a thoughtfully designed campus that reflects our commitment to being the best pre school in Bhubaneswar. Our environment is crafted to inspire creativity, ensure safety, and support holistic child development in a warm and engaging atmosphere.

Our school stands out as a top pre school and day care center in Bhubaneswar, offering modern facilities that create the perfect balance between learning and play.
            </p>
          </header>

          <div className={`${base}__cardsSliderWrap`}>
            <div className={`${base}__cardsControls`}>
              <button
                type="button"
                className={`${base}__navBtn`}
                onClick={handlePrev}
                aria-label="Previous cards"
              >
                ‹
              </button>

              <div className={`${base}__paginationDots`}>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${base}__dot ${
                      currentPage === index ? `${base}__dot--active` : ""
                    }`}
                    onClick={() => setCurrentPage(index)}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className={`${base}__navBtn`}
                onClick={handleNext}
                aria-label="Next cards"
              >
                ›
              </button>
            </div>

            <div className={`${base}__cardsGrid ${base}__cardsGrid--paged`}>
              {paginatedCards.map((card, index) => (
                <article
                  key={card.id}
                  className={`${base}__card ${base}__card--${card.theme}`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className={`${base}__cardInner`}>
                    <div className={`${base}__imgWrapper`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className={`${base}__cardImg`}
                      />
                    </div>

                    <h3 className={`${base}__cardTitle`}>{card.title}</h3>

                    <div className={`${base}__waveDivider`}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <p className={`${base}__cardDesc`}>{card.desc}</p>

                    <button className={`${base}__cardBtn`} type="button">
                      View More
                    </button>

                    <div className={`${base}__bottomDeco`}>
                      {renderFacilityIcon(card.iconType)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${base}__statsSection`}>
        <div className={`${base}__statsWaveTop`}></div>
        <div className={`${base}__statsWaveBottom`}></div>

        <div className={`${base}__letters`}>
          <span style={{ left: "10%", top: "30%" }}>o</span>
          <span style={{ left: "18%", top: "62%" }}>r</span>
          <span style={{ left: "35%", top: "14%" }}>a</span>
          <span style={{ left: "43%", top: "22%" }}>b</span>
          <span style={{ left: "56%", top: "12%" }}>4</span>
          <span style={{ left: "60%", top: "34%" }}>3</span>
          <span style={{ left: "65%", top: "22%" }}>5</span>
          <span style={{ left: "72%", top: "67%" }}>h</span>
          <span style={{ left: "90%", top: "32%" }}>j</span>
        </div>

        <img
          src={girlReadingImg}
          alt="Girl reading"
          className={`${base}__overlayKid ${base}__overlayKid--left`}
        />
        <img
          src={boyCycleImg}
          alt="Boy riding cycle"
          className={`${base}__overlayKid ${base}__overlayKid--right`}
        />

        <div className={`${base}__statsContainer`}>
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`${base}__statItem`}
              style={{ animationDelay: `${0.35 + index * 0.12}s` }}
            >
              <div className={`${base}__statIconCircle`}>
                {renderStatIcon(stat.icon)}
              </div>
              <h4 className={`${base}__statNumber`}>{stat.count}</h4>
              <p className={`${base}__statText`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolCampus;