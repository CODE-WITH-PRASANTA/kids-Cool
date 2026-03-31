import React, { useEffect, useRef, useState } from "react";
import "./Education.css";

import fieldBg from "../../assets/field.webp";
import heroImg from "../../assets/Section1.webp";
import img2 from "../../assets/Section2.webp";
import img3 from "../../assets/Section3.webp";
import img4 from "../../assets/Section4.webp";
import img5 from "../../assets/Section5.webp";
import pencilGirl from "../../assets/pencile.webp";
import pencilBoy from "../../assets/pencileboy.webp";

const Education = () => {
  const base = "educationSection";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      image: heroImg,
      alt: "Kids playing in school garden",
      className: `${base}__card ${base}__card--hero`,
    },
    {
      id: 2,
      image: img2,
      alt: "Kids classroom activity",
      className: `${base}__card ${base}__card--small`,
    },
    {
      id: 3,
      image: img3,
      alt: "Kids cycling outdoors",
      className: `${base}__card ${base}__card--smallTall`,
    },
    {
      id: 4,
      image: img4,
      alt: "Teacher with children painting",
      className: `${base}__card ${base}__card--medium`,
    },
    {
      id: 5,
      image: img5,
      alt: "Kids group learning together",
      className: `${base}__card ${base}__card--wide`,
    },
    // {
    //   id: 6,
    //   image: img6,
    //   alt: "Toddler playing with blocks",
    //   className: `${base}__card ${base}__card--bottom`,
    // },
  ];

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(current);
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.addEventListener("keydown", handleEsc);

    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <>
      <section
        ref={sectionRef}
        className={`${base} ${isVisible ? `${base}--visible` : ""}`}
      >
        <div className={`${base}__container`}>
          <div className={`${base}__topDecor`}>
            <div className={`${base}__doodle ${base}__doodle--left`}>
              <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M60 16V8" />
                  <path d="M80 20l4-7" />
                  <path d="M97 35l7-4" />
                  <path d="M104 58h8" />
                  <path d="M97 81l7 4" />
                  <path d="M80 96l4 7" />
                  <path d="M60 104v8" />
                  <path d="M40 96l-4 7" />
                  <path d="M23 81l-7 4" />
                  <path d="M16 58H8" />
                  <path d="M23 35l-7-4" />
                  <path d="M40 20l-4-7" />
                  <path d="M40 62l20-30 22 18-3 28H40V62Z" />
                  <path d="M54 78V60h12v18" />
                </g>
              </svg>
            </div>

            <div className={`${base}__headingWrap`}>
              <div className={`${base}__labelRow`}>
                <span className={`${base}__stars`}>★ ★ ★</span>

                <span className={`${base}__tinyIcon`}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 12.5 12 8l5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.5V7a3 3 0 0 1 6 0v1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <p className={`${base}__subTitle`}>International Education</p>
              </div>

              <h2 className={`${base}__title`}>Bicultural Students</h2>

              <p className={`${base}__desc`}>
                We create a joyful learning environment where children explore,
                play, build confidence, and grow through creative school
                activities and interactive experiences.
              </p>
            </div>

            <div className={`${base}__topIcon`} aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none">
                <g className={`${base}__topIconDraw`}>
                  <path
                    d="M50 22C63 28 72 41 73 54"
                    stroke="#9b87f5"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M72 54C74 68 68 82 56 92"
                    stroke="#7f72ff"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M55 19C77 25 94 42 99 64"
                    stroke="#c8b9ff"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M46 23L82 43L60 97L35 68L46 23Z"
                    fill="#f7f1ff"
                    stroke="#a48cff"
                    strokeWidth="2.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M56 34C63 34 68 39 68 46C68 53 63 58 56 58C49 58 44 53 44 46C44 39 49 34 56 34Z"
                    fill="#fff4ea"
                    stroke="#ff9955"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M56 39C60 39 63 42 63 46C63 50 60 53 56 53C52 53 49 50 49 46C49 42 52 39 56 39Z"
                    fill="#ffd36f"
                    stroke="#ffb648"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M41 67L30 79"
                    stroke="#8b7ef8"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M47 72L39 88"
                    stroke="#ff7d64"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M53 76L49 94"
                    stroke="#ff6a59"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M80 43L95 40L87 54L80 43Z"
                    fill="#dae6ff"
                    stroke="#8d83ff"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M71 85L80 99"
                    stroke="#ff7d64"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M78 80L92 93"
                    stroke="#ff9b6a"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className={`${base}__gallery`}>
            <div className={`${base}__left`}>
              <button
                type="button"
                className={`${base}__imageButton ${base}__imageButton--main`}
                onClick={() => setActiveImage(galleryImages[0])}
                aria-label="Open main image preview"
              >
                <div className={galleryImages[0].className}>
                  <img src={galleryImages[0].image} alt={galleryImages[0].alt} />
                </div>
              </button>
            </div>

            <div className={`${base}__right`}>
              {galleryImages.slice(1).map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${base}__imageButton ${base}__stagger${index + 1}`}
                  onClick={() => setActiveImage(item)}
                  aria-label={`Open preview ${item.id}`}
                >
                  <div className={item.className}>
                    <img src={item.image} alt={item.alt} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${base}__field`}
          style={{ backgroundImage: `url(${fieldBg})` }}
          aria-hidden="true"
        >
          <img
            src={pencilGirl}
            alt=""
            className={`${base}__kid ${base}__kid--left`}
          />
          <img
            src={pencilBoy}
            alt=""
            className={`${base}__kid ${base}__kid--right`}
          />
        </div>
      </section>

      {activeImage && (
        <div
          className={`${base}__modal`}
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`${base}__modalCard`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={`${base}__close`}
              onClick={() => setActiveImage(null)}
              aria-label="Close preview"
            >
              ×
            </button>

            <div className={`${base}__modalImageWrap`}>
              <img src={activeImage.image} alt={activeImage.alt} />

              <div className={`${base}__overlayTint`}></div>

              <div className={`${base}__eyes`}>
                <span className={`${base}__eye`}>
                  <span className={`${base}__pupil`}></span>
                </span>
                <span className={`${base}__eye`}>
                  <span className={`${base}__pupil`}></span>
                </span>
              </div>

              <div className={`${base}__glowBorder`}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Education;