import React, { useEffect, useRef, useState } from "react";
import "./TeachingMethodology.css";
import { PiGraduationCapThin } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";

const TeachingMethodology = () => {
  const base = "teaching-methodology";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const methodologyImg =
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80";

  const demoVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

  const ageGroups = [
    {
      id: 1,
      years: "2+",
      label: "Play",
      color: "pink",
      active: true,
      text: "A gentle beginning where children learn through play, music, movement, and simple classroom activities in a happy and caring environment.",
    },
    {
      id: 2,
      years: "3+",
      label: "Nursery",
      color: "orange",
      text: "Children build early speaking, listening, and social skills through stories, creative tasks, guided play, and everyday learning routines.",
    },
    {
      id: 3,
      years: "4+",
      label: "LKG",
      color: "green",
      text: "Our LKG program strengthens early reading, writing, number learning, and confidence through activity-based teaching and child-friendly methods.",
    },
    {
      id: 4,
      years: "5+",
      label: "UKG",
      color: "cyan",
      text: "UKG prepares children for primary school with strong basics in language, numbers, communication, classroom habits, and independent learning.",
    },
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
      { threshold: 0.18 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = videoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  return (
    <>
      <section
        ref={sectionRef}
        className={`${base} ${visible ? `${base}--visible` : ""}`}
      >
        <div className={`${base}__container`}>
          <div className={`${base}__top`}>
            <div className={`${base}__content`}>
              <div className={`${base}__mini-heading`}>
                <PiGraduationCapThin className={`${base}__mini-icon`} />
                <span>Teaching Approach</span>
              </div>

              <h3 className={`${base}__title`}>
                Smart Early Learning For Play, Nursery, LKG & UKG
              </h3>

              <p className={`${base}__description`}>
                Dream Flower Pre-School & Day Care, Bhubaneswar offers a joyful
                and child-friendly learning environment where every child grows
                through play, creativity, classroom activities, and guided
                learning. Our teaching method is simple, caring, and focused on
                strong early development.
              </p>

              <p className={`${base}__description ${base}__description--extra`}>
                We help children build good habits, communication skills,
                confidence, creativity, and basic academic readiness through
                stories, rhymes, art, movement, and activity-based learning.
                From Play Group to UKG, each stage is planned to support steady
                and happy progress.
              </p>

              <button className={`${base}__button`}>View Programs</button>
            </div>

            <div className={`${base}__media-wrap`}>
              <div className={`${base}__media-shape`}>
                <img
                  src={methodologyImg}
                  alt="Teaching methodology at Dream Flower Pre-School and Day Care"
                  className={`${base}__image`}
                />

                <button
                  type="button"
                  className={`${base}__play-btn`}
                  onClick={() => setVideoOpen(true)}
                  aria-label="Play teaching methodology video"
                >
                  <span className={`${base}__play-ring`}></span>
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>

          <div className={`${base}__levels`}>
            {ageGroups.map((item, index) => (
              <div
                key={item.id}
                className={`${base}__level ${base}__level--${item.color} ${
                  item.active ? `${base}__level--active` : ""
                }`}
                style={{ animationDelay: `${0.18 + index * 0.12}s` }}
              >
                <div className={`${base}__circle`}>
                  <span className={`${base}__years`}>{item.years}</span>
                  <span className={`${base}__years-text`}>Years</span>
                </div>

                <h3 className={`${base}__label`}>{item.label}</h3>
                <p className={`${base}__level-text`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className={`${base}__modal`}
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`${base}__modal-content`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={`${base}__modal-close`}
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              className={`${base}__video`}
              src={demoVideo}
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TeachingMethodology;