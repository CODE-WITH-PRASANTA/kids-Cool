import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Homehero.css";

import heroMain from "../../assets/Slider2.webp";
import sliderTwo from "../../assets/Slider3.webp";
import sliderThree from "../../assets/Slider4.webp";
import floatingCloud from "../../assets/slidercloud.webp";

const Homehero = () => {
  const base = "homehero";
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = useMemo(
    () => [
      {
        id: 1,
        type: "content",
        image: heroMain,
        miniTag: "Dream Flower Pre School",
        titleTop: "Learn",
        titleMiddle: "Play & Grow",
        titleBottom:
          "A safe and joyful place where little learners begin their journey with care and confidence.",
        button: "Know More",
        accent: "sky",
      },
      {
        id: 2,
        type: "content",
        image: sliderTwo,
        miniTag: "Caring Early Education",
        titleTop: "Bright",
        titleMiddle: "Little Minds",
        titleBottom:
          "Guided by Director Pranya Ranjan Palei and Principal Swetalin Swain with focus on values and growth.",
        button: "Explore More",
        accent: "orange",
      },
      {
        id: 3,
        type: "content",
        image: sliderThree,
        miniTag: "Admissions Open",
        titleTop: "Happy",
        titleMiddle: "School Days",
        titleBottom:
          "Creative activities, friendly teachers and a child-first environment for strong early learning.",
        button: "Apply Now",
        accent: "teal",
      },
    ],
    []
  );

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
      { threshold: 0.18 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const restartAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    restartAutoSlide();
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    restartAutoSlide();
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
    restartAutoSlide();
  };

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__slider`}>
        {slides.map((slide, index) => {
          const isActive = activeSlide === index;

          return (
            <article
              key={slide.id}
              className={`${base}__slide ${
                isActive ? `${base}__slide--active` : ""
              } ${base}__slide--${slide.accent}`}
            >
              <img
                src={slide.image}
                alt={`Dream Flower Pre School slide ${index + 1}`}
                className={`${base}__bg`}
              />

              <div className={`${base}__overlay`} />
              <div className={`${base}__glassGlow`} />

              <div className={`${base}__floatingWrap`}>
                <div className={`${base}__badgeFlower`}>
                  <span className={`${base}__badgeFlowerInner`}>✿</span>
                </div>

                <div className={`${base}__cloud ${base}__cloud-one`} />
                <div className={`${base}__cloud ${base}__cloud-two`} />

                <div className={`${base}__planePath`}>
                  <AirplaneSvg base={base} />
                </div>

                <button
                  className={`${base}__rocketBtn ${base}__rocketBtn--left`}
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  <RocketSvg base={base} />
                </button>

                <button
                  className={`${base}__rocketBtn ${base}__rocketBtn--right`}
                  type="button"
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  <RocketSvg base={base} />
                </button>
              </div>

              {slide.type === "content" && (
                <div className={`${base}__contentWrap`}>
                  <div className={`${base}__content`}>
                    <span className={`${base}__miniTag`}>{slide.miniTag}</span>
                    <h1 className={`${base}__percent`}>{slide.titleTop}</h1>
                    <h2 className={`${base}__heading`}>{slide.titleMiddle}</h2>
                    <p className={`${base}__subheading`}>{slide.titleBottom}</p>
                    <button className={`${base}__btn`} type="button">
                      {slide.button}
                    </button>
                  </div>
                </div>
              )}

              <img
                src={floatingCloud}
                alt="Cloud decoration"
                className={`${base}__cloudImage`}
              />
            </article>
          );
        })}

        <div className={`${base}__controls`}>
          <button
            className={`${base}__controlDot`}
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
          />
          <button
            className={`${base}__controlPill`}
            type="button"
            onClick={() => handleDotClick(activeSlide)}
            aria-label="Current slide"
          />
          <button
            className={`${base}__controlDot`}
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
          />
        </div>

        <div className={`${base}__dots`}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`${base}__dot ${
                activeSlide === index ? `${base}__dot--active` : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AirplaneSvg = ({ base }) => {
  return (
    <svg
      className={`${base}__airplane`}
      viewBox="0 0 180 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 20C28 24 46 34 60 50C70 61 78 70 92 74C104 77 116 73 120 64C124 55 120 44 110 36C98 26 85 21 72 17"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 10"
      />
    </svg>
  );
};

const RocketSvg = ({ base }) => {
  return (
    <svg
      className={`${base}__rocketSvg`}
      viewBox="0 0 140 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g>
        <path d="M10 30 L28 18 L28 42 Z" fill="#145f8d" />
        <path d="M26 30 C26 16 40 10 72 10 C104 10 118 16 126 30 C118 44 104 50 72 50 C40 50 26 44 26 30 Z" fill="#ffd9c7" />
        <circle cx="72" cy="30" r="13" fill="#1db4c2" />
        <circle cx="72" cy="30" r="7" fill="#7fe6eb" />
        <circle cx="98" cy="30" r="8" fill="#ee8a5a" />
        <path d="M126 30 L138 20 L134 30 L138 40 Z" fill="#ff7a3d" />
        <path d="M122 22 L132 18 L126 28 Z" fill="#ff4f4f" />
        <path d="M122 38 L132 42 L126 32 Z" fill="#ff4f4f" />
      </g>
    </svg>
  );
};

export default Homehero;