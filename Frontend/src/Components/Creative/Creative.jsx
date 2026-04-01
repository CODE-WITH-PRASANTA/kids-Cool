import React, { useEffect, useRef, useState } from "react";
import "./Creative.css";

import creativePaint from "../../assets/a2.webp";
import creativeClay from "../../assets/a1.webp";
import flyBoy from "../../assets/flyboy.webp";

const Creative = () => {
  const base = "creativeSection";
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(current);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${base} ${show ? `${base}--show` : ""}`}
    >
      <div className={`${base}__container`}>
        <div className={`${base}__left`}>
          <div className={`${base}__labelWrap`}>
            <span className={`${base}__capIcon`}>
              <svg
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M8 24L32 14L56 24L32 34L8 24Z"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 30V40C18 40 24 46 32 46C40 46 46 40 46 40V30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className={`${base}__eyebrow`}>Harmonious</span>
          </div>

          <h2 className={`${base}__title`}>
            Creative Learning Opportunity <br />
            for Kids in Bhubaneswar
          </h2>

          <p className={`${base}__desc`}>
            What began as a small initiative has grown into a highly trusted
            name among parents searching for the best pre school in Bhubaneswar
            and a reliable day care center in Bhubaneswar. Over the years, Dream
            Flower Pre School & Day Care has established itself as a top pre
            school near Rasulgarh, Bhubaneswar, known for delivering quality
            early education in a safe, child-friendly, and engaging environment.
            Our focus on a structured, activity-based curriculum, combined with
            modern teaching methods and creative learning opportunities, helps
            children build strong academic and social foundations. With a
            commitment to excellence and care, we have earned the trust of
            families across Rasulgarh and surrounding areas, making us a
            preferred choice for parents looking for the best play school,
            nursery school, and day care in Bhubaneswar.
          </p>

          <div className={`${base}__actionArea`}>
            <button className={`${base}__button`} type="button">
              Contact Us
            </button>

            <div className={`${base}__flyWrap`}>
              <img
                src={flyBoy}
                alt="Creative child flying"
                className={`${base}__flyBoy`}
              />

              <span className={`${base}__rainbow`}>
                <svg viewBox="0 0 260 120">
                  <path
                    d="M30 95C50 45 90 18 130 18C170 18 210 45 230 95"
                    fill="none"
                    stroke="#ff6ea8"
                    strokeWidth="4"
                  />
                  <path
                    d="M45 95C60 55 95 30 130 30C165 30 200 55 215 95"
                    fill="none"
                    stroke="#ffb84d"
                    strokeWidth="4"
                  />
                  <path
                    d="M60 95C75 65 100 45 130 45C160 45 185 65 200 95"
                    fill="none"
                    stroke="#7ad66d"
                    strokeWidth="4"
                  />
                </svg>
              </span>

              <span className={`${base}__dashArrow`}>
                <svg
                  viewBox="0 0 100 50"
                  fill="none"
                  stroke="#c7c7c7"
                  strokeWidth="1.5"
                >
                  <path d="M5 40 Q20 10 50 25 T95 10" strokeDasharray="4 4" />
                  <path d="M90 5 L96 11 L88 15" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className={`${base}__right`}>
          <div className={`${base}__imgFrame ${base}__imgFrame--top`}>
            <img src={creativeClay} alt="Clay art activity" />
          </div>

          <div className={`${base}__imgFrame ${base}__imgFrame--bottom`}>
            <img src={creativePaint} alt="Painting activity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
