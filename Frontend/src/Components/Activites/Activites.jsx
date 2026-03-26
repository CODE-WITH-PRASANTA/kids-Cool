import React, { useEffect, useRef, useState } from "react";
import "./Activites.css";

import craftImg from "../../assets/img01.webp";
import paintingImg from "../../assets/img02.webp";
import blocksImg from "../../assets/imbox1.webp";
import classImg from "../../assets/imbox2.webp";
import swimImg from "../../assets/imbox3.webp";

const Activites = () => {
  const base = "activitiesSection";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeSet, setActiveSet] = useState(0);

  const activitySets = [
    [
      {
        id: 1,
        title: "Craft",
        text: "Aliquam congue id velit sit amet vehicula. Donec quis pretium orci. Mauris posuere sem nec ex laoreet suscipit fusce.",
        image: craftImg,
        shape: "hexagon",
        color: "violet",
        icon: "butterfly",
      },
      {
        id: 2,
        title: "Painting",
        text: "Aliquam congue id velit sit amet vehicula. Donec quis pretium orci. Mauris posuere sem nec ex laoreet suscipit fusce.",
        image: paintingImg,
        shape: "triangle",
        color: "mint",
        icon: "ball",
      },
      {
        id: 3,
        title: "Physical Activities",
        text: "Sed pulvinar proin gravida hendrerit lectus a. Sed nisi lacus sed viverra. Vitae auctor eu augue ut. Ac felis donec et odio.",
        image: swimImg,
        shape: "square",
        color: "cyan",
        icon: "school",
      },
    ],
    [
      {
        id: 4,
        title: "Physical Activities",
        text: "Sed pulvinar proin gravida hendrerit lectus a. Sed nisi lacus sed viverra. Vitae auctor eu augue ut. Ac felis donec et odio.",
        image: swimImg,
        shape: "square",
        color: "cyan",
        icon: "butterfly",
      },
      {
        id: 5,
        title: "Team Activities",
        text: "Blandit volutpat maecenas volutpat blandit aliquam etiam. Placerat duis ultricies lacus sed consectetur adipiscing elit.",
        image: blocksImg,
        shape: "circle",
        color: "yellow",
        icon: "kids",
      },
      {
        id: 6,
        title: "Individual Activity",
        text: "Vivamus at augue eget arcu dictum varius. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.",
        image: classImg,
        shape: "triangle",
        color: "orange",
        icon: "ball",
      },
    ],
  ];

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
      { threshold: 0.16 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const nextSet = () => {
    setActiveSet((prev) => (prev + 1) % activitySets.length);
  };

  const prevSet = () => {
    setActiveSet((prev) => (prev - 1 + activitySets.length) % activitySets.length);
  };

  const currentCards = activitySets[activeSet];

  const renderTopIcon = (type) => {
    if (type === "butterfly") {
      return (
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M38 37c-7-14-20-19-25-13-4 5-1 18 10 25 6 4 12 3 15-1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 37c7-14 20-19 25-13 4 5 1 18-10 25-6 4-12 3-15-1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M39 40c-10 7-12 19-6 24 5 5 15 2 20-8 3-7 1-13-4-16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41 40c10 7 12 19 6 24-5 5-15 2-20-8-3-7-1-13 4-16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 24c0 11 0 20 0 31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M38 22l-6-6M42 22l6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    }

    if (type === "ball") {
      return (
        <svg viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2.4" />
          <path d="M40 15c8 8 11 17 11 25S48 57 40 65" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M40 15c-8 8-11 17-11 25s3 17 11 25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M17 31c7 4 15 6 23 6s16-2 23-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M17 49c7-4 15-6 23-6s16 2 23 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    }

    if (type === "school") {
      return (
        <svg viewBox="0 0 90 90" fill="none">
          <path d="M18 58h54v18H18V58Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M24 58V42h42v16" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M14 42h58L58 28H28L14 42Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M38 76V62h14v14" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M28 50h6M56 50h6M45 22V10M45 10h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M55 10l-4 4 4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="28" cy="32" r="12" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="52" cy="32" r="12" stroke="currentColor" strokeWidth="2.4" />
        <path d="M12 58c3-11 11-17 16-17s13 6 16 17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M36 58c3-11 11-17 16-17s13 6 16 17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__container`}>
        <div className={`${base}__headerWrap`}>
          <div className={`${base}__header`}>
            <div className={`${base}__miniIcon`} aria-hidden="true">
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
            </div>

            <p className={`${base}__subTitle`}>Activity Programs</p>
            <h2 className={`${base}__title`}>Smart Activities</h2>
            <p className={`${base}__desc`}>
              Forbi mauris augue, pulvinar quis luctus eget. Phasellus gravida
              lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue
              vitae felis pellentesque varius nec quis nunc.
            </p>
          </div>

          <div className={`${base}__rainbowHead`} aria-hidden="true">
            <svg viewBox="0 0 180 160" fill="none">
              <path d="M18 98C42 62 73 40 108 40c31 0 48 16 59 36" stroke="#f44336" strokeWidth="12" fill="none" />
              <path d="M27 105C49 73 76 55 107 55c25 0 40 13 50 30" stroke="#ff9800" strokeWidth="12" fill="none" />
              <path d="M36 111C55 84 79 69 106 69c20 0 32 10 42 24" stroke="#ffeb3b" strokeWidth="12" fill="none" />
              <path d="M44 117C61 94 81 82 104 82c16 0 25 8 34 19" stroke="#4caf50" strokeWidth="12" fill="none" />
              <path d="M53 122C68 104 84 95 102 95c12 0 19 6 26 14" stroke="#03a9f4" strokeWidth="12" fill="none" />
              <path d="M61 128C73 113 86 107 100 107c9 0 14 4 20 11" stroke="#673ab7" strokeWidth="12" fill="none" />
              <circle cx="136" cy="43" r="18" fill="#ffe86b" stroke="#f0b400" strokeWidth="3" />
              <circle cx="129" cy="41" r="2.4" fill="#7a5212" />
              <circle cx="142" cy="41" r="2.4" fill="#7a5212" />
              <path d="M130 49c4 5 8 5 12 0" stroke="#e38058" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M136 17v8M118 22l4 7M154 22l-4 7M110 38l8 1M162 38l-8 1M119 58l5-5M153 58l-5-5" stroke="#f0b400" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className={`${base}__stage`}>
          <button
            type="button"
            className={`${base}__nav ${base}__nav--left`}
            onClick={prevSet}
            aria-label="Previous activities"
          >
            <span className={`${base}__spider`}>
              <svg viewBox="0 0 100 44" fill="none">
                <path d="M6 22c14-6 28-7 42-2s24 4 38 0" stroke="#ff8fab" strokeWidth="2.3" strokeDasharray="2 5" strokeLinecap="round" />
                <g transform="translate(60 7)">
                  <ellipse cx="12" cy="15" rx="11" ry="10" fill="#43587d" />
                  <circle cx="9" cy="13" r="2.5" fill="#fff" />
                  <circle cx="16" cy="13" r="2.5" fill="#ff5f87" />
                  <path d="M22 15h8l5 4-5 4h-8" fill="#ff5f87" />
                  <path d="M10 5V0M5 7 1 4M19 7l4-3M3 15H0M24 15h4M5 23l-4 3M19 23l4 3M10 25v5" stroke="#43587d" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </span>
          </button>

          <button
            type="button"
            className={`${base}__nav ${base}__nav--right`}
            onClick={nextSet}
            aria-label="Next activities"
          >
            <span className={`${base}__spider`}>
              <svg viewBox="0 0 100 44" fill="none">
                <path d="M94 22c-14-6-28-7-42-2s-24 4-38 0" stroke="#ff8fab" strokeWidth="2.3" strokeDasharray="2 5" strokeLinecap="round" />
                <g transform="translate(28 7)">
                  <ellipse cx="12" cy="15" rx="11" ry="10" fill="#43587d" />
                  <circle cx="9" cy="13" r="2.5" fill="#fff" />
                  <circle cx="16" cy="13" r="2.5" fill="#ff5f87" />
                  <path d="M22 15h8l5 4-5 4h-8" fill="#ff5f87" />
                  <path d="M10 5V0M5 7 1 4M19 7l4-3M3 15H0M24 15h4M5 23l-4 3M19 23l4 3M10 25v5" stroke="#43587d" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </span>
          </button>

          <div className={`${base}__cards`}>
            {currentCards.map((item, index) => (
              <article
                key={item.id}
                className={`${base}__card ${base}__card--${item.shape} ${base}__card--${item.color} ${base}__card--index${index + 1}`}
              >
                <div className={`${base}__shapeWrap`}>
                  <div className={`${base}__shapeIcon`} aria-hidden="true">
                    {renderTopIcon(item.icon)}
                  </div>

                  <div className={`${base}__imageHolder`}>
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>

                <div className={`${base}__content`}>
                  <h3 className={`${base}__cardTitle`}>{item.title}</h3>
                  <p className={`${base}__cardText`}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activites;