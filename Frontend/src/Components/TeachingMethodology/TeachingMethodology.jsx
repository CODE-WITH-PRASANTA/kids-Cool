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

  const demoVideo =
    "https://www.w3schools.com/html/mov_bbb.mp4";

  const ageGroups = [
    { id: 1, years: "2–3", label: "Infant", color: "pink", active: true },
    { id: 2, years: "4–6", label: "Kindergarten", color: "orange" },
    { id: 3, years: "7–8", label: "Pre-Primary", color: "green" },
    { id: 4, years: "9–10", label: "Primary", color: "cyan" },
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
                <span>Active</span>
              </div>

              <h2 className={`${base}__title`}>Visual Teaching Methodology!</h2>

              <p className={`${base}__description`}>
                Morbi mauris augue, pulvinar quis luctus eget, pretium sed
                massa. Phasellus gravida lacus quis eros lobortis, nec dapibus
                quam gravida. Duis sed augue vitae felis pellentesque varius nec
                quis nunc.
              </p>

              <button className={`${base}__button`}>Creative Works</button>
            </div>

            <div className={`${base}__media-wrap`}>
              <div className={`${base}__media-shape`}>
                <img
                  src={methodologyImg}
                  alt="Visual teaching methodology"
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