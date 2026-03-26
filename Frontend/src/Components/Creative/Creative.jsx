import React, { useEffect, useRef, useState } from "react";
import "./Creative.css";

import creativePaint from "../../assets/a2.webp";
import creativeClay from "../../assets/a1.webp";
import flyBoy from "../../assets/flyboy.webp";
import handSection from "../../assets/handsection.webp";

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
      { threshold: 0.1 }
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
        {/* Left Content Side */}
        <div className={`${base}__left`}>
          <div className={`${base}__labelWrap`}>
            <span className={`${base}__capIcon`}>
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 24L32 14L56 24L32 34L8 24Z" strokeLinejoin="round" />
                <path d="M18 30V40C18 40 24 46 32 46C40 46 46 40 46 40V30" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className={`${base}__eyebrow`}>Harmonious</span>
          </div>

          <h2 className={`${base}__title`}>
            Creative Learning<br />Opportunity For Kids
          </h2>

          <p className={`${base}__desc`}>
            Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa.
            Phasellus gravida lacus quis eros lobortis, nec dapibus quam
            gravida. Duis sed augue vitae felis pellentesque varius nec quis
            nunc.
          </p>

          <div className={`${base}__actionArea`}>
            <button className={`${base}__button`} type="button">
              Creative Works
            </button>

            {/* Overlapping Fly Boy Illustration */}
            <div className={`${base}__flyWrap`}>
                <img src={flyBoy} alt="Creative child flying" className={`${base}__flyBoy`} />
                <span className={`${base}__rainbow`}>
                    <svg viewBox="0 0 260 120">
                        <path d="M30 95C50 45 90 18 130 18C170 18 210 45 230 95" fill="none" stroke="#ff6ea8" strokeWidth="4" />
                        <path d="M45 95C60 55 95 30 130 30C165 30 200 55 215 95" fill="none" stroke="#ffb84d" strokeWidth="4" />
                        <path d="M60 95C75 65 100 45 130 45C160 45 185 65 200 95" fill="none" stroke="#7ad66d" strokeWidth="4" />
                    </svg>
                </span>
                <span className={`${base}__dashArrow`}>
                    <svg viewBox="0 0 100 50" fill="none" stroke="#ccc" strokeWidth="1.5">
                        <path d="M5 40 Q 20 10 50 25 T 95 10" strokeDasharray="4 4" />
                        <path d="M90 5 L 96 11 L 88 15" />
                    </svg>
                </span>
            </div>
          </div>
        </div>

        {/* Right Images Side - Specific Reference Crops */}
        <div className={`${base}__right`}>
          <div className={`${base}__imgFrame ${base}__imgFrame--top`}>
            <img src={creativeClay} alt="Clay" />
          </div>

          <div className={`${base}__imgFrame ${base}__imgFrame--bottom`}>
            <img src={creativePaint} alt="Painting" />
          </div>
        </div>

        {/* Decorative Floating Hands */}
        <div className={`${base}__handDecor`}>
          <img src={handSection} alt="Hands decor" />
        </div>
      </div>
    </section>
  );
};

export default Creative;