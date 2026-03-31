import React, { useEffect, useRef, useState } from "react";
import "./EssentialSkill.css";
import playKid from "../../assets/playboy.webp";

const EssentialSkill = () => {
  const base = "essentialSkill";
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
      { threshold: 0.15 },
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  /* ================= slider ================= */

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(2);

const programs = [
  {
    id: 1,
    title: "Play Group",
    desc: "Our Play Group program introduces children to a fun and engaging learning environment through play-based activities. It helps develop social skills, creativity, and confidence, making it an ideal start for early childhood education in Bhubaneswar.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Nursery",
    desc: "The Nursery program focuses on building strong foundational skills through activity-based learning. Children develop early literacy, numeracy, and communication skills in a structured yet enjoyable environment.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "LKG / UKG",
    desc: "Our LKG and UKG programs prepare children for primary education with a focus on academics, communication, and personality development. It ensures a smooth transition to formal schooling.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Day Care",
    desc: "We provide a safe and reliable day care environment in Bhubaneswar where children are cared for with attention and love. It includes supervised activities, healthy routines, and a secure setting for working parents.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
];

  /* responsive cards */

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 600) {
        setPerPage(1);
      } else {
        setPerPage(2);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(programs.length / perPage);

  /* auto slide */

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const current = page;

  /* animation visible */

  useEffect(() => {
    const currentEl = sectionRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(currentEl);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(currentEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__topBg`} />

      <div className={`${base}__decor ${base}__decor--star`}>
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path
            d="M58 10 L68 42 L102 34 L80 60 L108 82 L73 82 L72 109 L52 85 L20 98 L35 68 L9 49 L44 46 Z"
            fill="#bfd5db"
          />
          <circle cx="55" cy="62" r="3" fill="#607d8b" />
          <circle cx="75" cy="62" r="3" fill="#607d8b" />
          <path
            d="M50 77 Q61 84 72 77"
            stroke="#607d8b"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M83 22 Q106 28 113 47"
            stroke="#f2b1aa"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M77 17 Q100 20 109 38"
            stroke="#f2d1cc"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M72 14 Q91 14 102 29"
            stroke="#f0c0b8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={`${base}__decor ${base}__decor--rocketTop`}>
        <svg viewBox="0 0 120 150" aria-hidden="true">
          <g transform="rotate(28 60 75)">
            <path
              d="M58 14 C87 22 105 48 101 88 C78 91 53 80 39 60 C36 42 45 25 58 14 Z"
              fill="#f4f4f4"
            />
            <path d="M61 16 C79 18 93 34 97 48 L74 47 Z" fill="#0b6d82" />
            <circle cx="68" cy="58" r="13" fill="#0e7387" />
            <circle cx="68" cy="58" r="8" fill="#176f86" />
            <path d="M46 70 L27 77 L42 58 Z" fill="#f6b08d" />
            <path d="M55 84 L50 104 L67 89 Z" fill="#f6b08d" />
            <path
              d="M44 87 C37 101 28 111 18 121"
              stroke="#f05b3b"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M52 90 C48 107 47 119 47 132"
              stroke="#ff7c4d"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M60 90 C61 107 66 119 72 132"
              stroke="#ff8e5d"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      <div className={`${base}__decor ${base}__decor--planet`}>
        <svg viewBox="0 0 160 160" aria-hidden="true">
          <circle cx="80" cy="80" r="42" fill="#f79b70" />
          <ellipse
            cx="80"
            cy="84"
            rx="64"
            ry="18"
            fill="none"
            stroke="#111"
            strokeWidth="4"
            transform="rotate(-20 80 84)"
          />
          <circle cx="54" cy="58" r="4" fill="#fff2ea" />
          <circle cx="92" cy="58" r="5" fill="#fff2ea" />
          <circle cx="72" cy="74" r="4" fill="#fff2ea" />
          <circle cx="104" cy="88" r="5" fill="#fff2ea" />
          <circle cx="64" cy="96" r="4" fill="#fff2ea" />
          <circle cx="118" cy="66" r="5" fill="#111" />
          <circle cx="28" cy="74" r="5" fill="#111" />
          <circle cx="38" cy="40" r="7" fill="#111" />
          <circle cx="128" cy="92" r="5" fill="#111" />
        </svg>
      </div>

      <div className={`${base}__decor ${base}__decor--abc`}>
        <svg viewBox="0 0 220 180" aria-hidden="true">
          <g opacity="0.18" stroke="#9aa7af" strokeWidth="3" fill="none">
            <rect x="22" y="38" width="58" height="58" rx="2" />
            <rect x="56" y="82" width="58" height="58" rx="2" />
            <rect x="101" y="60" width="58" height="58" rx="2" />
          </g>
          <text
            x="42"
            y="77"
            fill="#9aa7af"
            opacity="0.28"
            fontSize="42"
            fontWeight="700"
          >
            A
          </text>
          <text
            x="77"
            y="122"
            fill="#9aa7af"
            opacity="0.28"
            fontSize="42"
            fontWeight="700"
          >
            B
          </text>
          <text
            x="122"
            y="100"
            fill="#9aa7af"
            opacity="0.28"
            fontSize="42"
            fontWeight="700"
          >
            C
          </text>
          <g transform="translate(150 18) rotate(18)">
            <rect x="0" y="0" width="18" height="92" rx="8" fill="#14859a" />
            <polygon points="18,0 31,10 18,18" fill="#ffd4a0" />
            <polygon points="31,10 37,10 31,13" fill="#343434" />
            <rect x="4" y="8" width="10" height="10" rx="2" fill="#74bfd0" />
          </g>
        </svg>
      </div>

      <div className={`${base}__decor ${base}__decor--rocketBottom`}>
        <svg viewBox="0 0 100 140" aria-hidden="true">
          <g transform="rotate(6 50 70)">
            <path
              d="M50 10 C70 18 81 37 80 69 C63 73 44 65 31 48 C30 33 36 19 50 10 Z"
              fill="#d6d0ea"
            />
            <path d="M50 13 C61 14 71 24 75 34 L59 35 Z" fill="#f5a07f" />
            <circle cx="53" cy="42" r="9" fill="#f2d5a7" />
            <circle cx="53" cy="42" r="5" fill="#eec39c" />
            <path d="M35 55 L19 63 L29 46 Z" fill="#9da7ca" />
            <path d="M61 66 L70 81 L54 73 Z" fill="#8ca0c9" />
            <path
              d="M38 69 C34 81 31 96 31 111"
              stroke="#ff8566"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M49 72 C49 85 49 100 50 118"
              stroke="#ffb190"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M58 70 C61 82 65 95 72 106"
              stroke="#ff9c72"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      <div className={`${base}__decor ${base}__decor--dashLeft`}>
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <path
            d="M18 88 C28 88 38 82 44 72 C50 61 48 48 62 42 C76 35 83 44 98 30 C108 20 114 14 130 14"
            stroke="#b4b7bb"
            strokeWidth="3"
            strokeDasharray="4 8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M128 8 L144 14 L132 25"
            fill="none"
            stroke="#b4b7bb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={`${base}__decor ${base}__decor--dashRight`}>
        <svg viewBox="0 0 220 120" aria-hidden="true">
          <path
            d="M20 22 C42 34 57 44 82 40 C108 36 117 22 143 28 C165 34 170 54 193 60"
            stroke="#b4b7bb"
            strokeWidth="3"
            strokeDasharray="4 8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M12 16 L31 15 L22 31"
            fill="none"
            stroke="#b4b7bb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={`${base}__container`}>
        <div className={`${base}__aboutRow`}>
          <div className={`${base}__aboutImageWrap`}>
            <div className={`${base}__blobFrame`}>
              <div className={`${base}__blobOrange`}></div>
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
                alt="Children learning together"
                className={`${base}__aboutImage`}
              />
              <span className={`${base}__dot`}></span>
              <span className={`${base}__dot ${base}__dot--small`}></span>
            </div>
          </div>

          <div className={`${base}__aboutContent`}>
            <div className={`${base}__labelWrap`}>
              <span className={`${base}__miniIcon`}>
                <svg viewBox="0 0 36 28" aria-hidden="true">
                  <path
                    d="M5 15 L18 7 L31 15 L18 23 Z"
                    fill="none"
                    stroke="#b8b8b8"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 18 V22 C13 25 23 25 27 22 V18"
                    fill="none"
                    stroke="#b8b8b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className={`${base}__sectionTag`}>About Us</span>
            </div>

            <h2 className={`${base}__title`}>
              Dream Flower Pre School & Day Care – Bhubaneswar
            </h2>

            <p className={`${base}__desc`}>
              Looking for the best pre school in Bhubaneswar that nurtures your
              child’s growth with care, creativity, and quality education?
              Welcome to Dream Flower Pre School & Day Care, where we lay the
              foundation for lifelong learning through fun, engaging, and
              structured programs. Recognized as a top pre school and day care
              center in Bhubaneswar, we provide a safe, supportive, and
              stimulating environment for young minds to explore, learn, and
              grow. <br />

              At Dream Flower Pre School, we believe that every child is unique and deserves the best start in life. Our curriculum is designed to balance education, creativity, and play-based learning, ensuring holistic development.
            </p>

            <button className={`${base}__btn`} type="button">
             Contact Us
            </button>

            <span className={`${base}__spark`}>
              <svg viewBox="0 0 80 80" aria-hidden="true">
                <path
                  d="M40 8 L45 31 L68 20 L51 40 L70 48 L47 48 L52 71 L40 53 L28 71 L33 48 L10 48 L29 40 L12 20 L35 31 Z"
                  fill="#b5663d"
                />
              </svg>
            </span>
          </div>

          <div className={`${base}__aboutKidWrap`}>
            <div className={`${base}__kidRocket`}>
              <svg viewBox="0 0 120 150" aria-hidden="true">
                <g transform="rotate(24 60 75)">
                  <path
                    d="M58 14 C87 22 105 48 101 88 C78 91 53 80 39 60 C36 42 45 25 58 14 Z"
                    fill="#f8f8f8"
                  />
                  <path d="M61 16 C79 18 93 34 97 48 L74 47 Z" fill="#0b6d82" />
                  <circle cx="68" cy="58" r="13" fill="#0e7387" />
                  <path d="M46 70 L27 77 L42 58 Z" fill="#f6b08d" />
                  <path d="M55 84 L50 104 L67 89 Z" fill="#f6b08d" />
                  <path
                    d="M44 87 C37 101 28 111 18 121"
                    stroke="#f05b3b"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M52 90 C48 107 47 119 47 132"
                    stroke="#ff7c4d"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M60 90 C61 107 66 119 72 132"
                    stroke="#ff8e5d"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>

            <img
              src={playKid}
              alt="Kid playing with blocks"
              className={`${base}__kidImage`}
            />

            <div className={`${base}__blocks`}>
              <span className={`${base}__block ${base}__block--red`}></span>
              <span className={`${base}__block ${base}__block--blue`}></span>
              <span className={`${base}__block ${base}__block--green`}></span>
              <span className={`${base}__block ${base}__block--yellow`}></span>
              <span className={`${base}__block ${base}__block--orange`}></span>
            </div>

            <span className={`${base}__horn ${base}__horn--left`}></span>
            <span className={`${base}__horn ${base}__horn--right`}></span>
          </div>
        </div>

        <div className={`${base}__waveDivider`}>
          <svg
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 30
              Q10 10 20 30 T40 30 T60 30 T80 30 T100 30 T120 30 T140 30 T160 30 T180 30
              T200 30 T220 30 T240 30 T260 30 T280 30 T300 30 T320 30 T340 30 T360 30
              T380 30 T400 30 T420 30 T440 30 T460 30 T480 30 T500 30 T520 30 T540 30
              T560 30 T580 30 T600 30 T620 30 T640 30 T660 30 T680 30 T700 30 T720 30
              T740 30 T760 30 T780 30 T800 30 T820 30 T840 30 T860 30 T880 30 T900 30
              T920 30 T940 30 T960 30 T980 30 T1000 30 T1020 30 T1040 30 T1060 30 T1080 30
              T1100 30 T1120 30 T1140 30 T1160 30 T1180 30 T1200 30"
              fill="none"
              stroke="#0f7f94"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={`${base}__programHeader`}>
          <div className={`${base}__programIcon`}>
            <svg viewBox="0 0 60 60" aria-hidden="true">
              <path
                d="M14 20 L30 10 L46 20 L30 30 Z"
                fill="none"
                stroke="#c1b8b0"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M20 26 V37 C20 42 40 42 40 37 V26"
                fill="none"
                stroke="#c1b8b0"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className={`${base}__programTag`}>Educational Programs</p>
          <h3 className={`${base}__programTitle`}>
           Systematic Early Education for Every Step of Growth
          </h3>
          <p className={`${base}__programDesc`}>
           At Dream Flower Pre School & Day Care in Bhubaneswar, we offer carefully planned early education programs that support holistic child development. Through a mix of play-based learning, structured guidance, and creative exploration, we create a strong foundation for your child’s future learning journey.
          </p>
        </div>

        {/* ========================= */}
        {/* ===== SLIDER START ===== */}
        {/* ========================= */}

        <div className={`${base}__slider`}>
          <div
            className={`${base}__sliderTrack`}
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className={`${base}__slidePage`}>
                {programs
                  .slice(pageIndex * perPage, pageIndex * perPage + perPage)
                  .map((item, index) => (
                    <article className={`${base}__card`} key={item.id}>
                      <div className={`${base}__cardImageWrap`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`${base}__cardImage`}
                        />

                        <span
                          className={`${base}__bubble ${base}__bubble--one`}
                        />
                        <span
                          className={`${base}__bubble ${base}__bubble--two`}
                        />
                        <span
                          className={`${base}__bubble ${base}__bubble--three`}
                        />
                      </div>

                      <div className={`${base}__cardContent`}>
                        <h4 className={`${base}__cardTitle`}>{item.title}</h4>

                        <p className={`${base}__cardDesc`}>{item.desc}</p>

                        <a
                          href="/"
                          className={`${base}__cardLink`}
                          onClick={(e) => e.preventDefault()}
                        >
                          Contact Us
                        </a>
                      </div>
                    </article>
                  ))}
              </div>
            ))}
          </div>

          {/* ===== dots ===== */}

          <div className={`${base}__dots`}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                className={`${base}__dot ${
                  i === page ? `${base}__dot--active` : ""
                }`}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
        </div>

        <div className={`${base}__action`}>
          <button className={`${base}__btn ${base}__btn--center`} type="button">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default EssentialSkill;
