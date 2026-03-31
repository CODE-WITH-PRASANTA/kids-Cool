import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Education.css";

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

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [rightPage, setRightPage] = useState(0);
  const imagesPerPage = 4;

  const galleryImages = [
    {
      id: 1,
      image: heroImg,
      alt: "Dream Flower Pre-School & Day Care Bhubaneswar joyful learning environment",
      className: `${base}__card ${base}__card--hero`,
    },
    {
      id: 2,
      image: img2,
      alt: "Dream Flower Pre-School & Day Care Bhubaneswar classroom activity",
      className: `${base}__card ${base}__card--small`,
    },
    {
      id: 3,
      image: img3,
      alt: "Kids outdoor play at Dream Flower Pre-School & Day Care Bhubaneswar",
      className: `${base}__card ${base}__card--smallTall`,
    },
    {
      id: 4,
      image: img4,
      alt: "Teacher guiding children at Dream Flower Pre-School & Day Care Bhubaneswar",
      className: `${base}__card ${base}__card--medium`,
    },
    {
      id: 5,
      image: img5,
      alt: "Group learning at Dream Flower Pre-School & Day Care Bhubaneswar",
      className: `${base}__card ${base}__card--wide`,
    },
  ];

  const rightGalleryImages = [
    {
      id: 2,
      image: img2,
      alt: "Dream Flower Pre-School & Day Care Bhubaneswar classroom activity",
      className: `${base}__card ${base}__card--rightGrid`,
    },
    {
      id: 3,
      image: img3,
      alt: "Kids outdoor play at Dream Flower Pre-School & Day Care Bhubaneswar",
      className: `${base}__card ${base}__card--rightGrid`,
    },
    {
      id: 4,
      image: img4,
      alt: "Teacher guiding children at Dream Flower Pre-School & Day Care Bhubaneswar",
      className: `${base}__card ${base}__card--rightGrid`,
    },
    {
      id: 5,
      image: img5,
      alt: "Group learning at Dream Flower Pre-School & Day Care Bhubaneswar",
      className: `${base}__card ${base}__card--rightGrid`,
    },
  ];

  const totalRightPages = Math.ceil(rightGalleryImages.length / imagesPerPage);

  const paginatedRightImages = useMemo(() => {
    const start = rightPage * imagesPerPage;
    return rightGalleryImages.slice(start, start + imagesPerPage);
  }, [rightGalleryImages, rightPage]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const nextRightPage = () => {
    setRightPage((prev) => (prev + 1) % totalRightPages);
  };

  const prevRightPage = () => {
    setRightPage((prev) => (prev - 1 + totalRightPages) % totalRightPages);
  };

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

                <p className={`${base}__subTitle`}>
                  Our Enviromental Gallery
                </p>
              </div>

              <h2 className={`${base}__title`}>
                Best Pre-School & Day Care in Bhubaneswar for Joyful Early Learning
              </h2>

              <p className={`${base}__desc`}>
                Welcome to <strong>Dream Flower Pre-School & Day Care Bhubaneswar</strong>,
                a warm, safe, and inspiring learning space where every child feels
                happy, confident, and cared for. We create a joyful environment
                filled with playful learning, creative classroom activities,
                guided exploration, and loving teacher support so that children
                can learn naturally while enjoying every moment of their early
                childhood journey.
              </p>

              <p className={`${base}__extraDesc`}>
                As a trusted <strong>pre-school and day care in Bhubaneswar</strong>,
                we focus on building communication, creativity, social skills,
                confidence, discipline, and strong learning foundations through
                fun-based education. From colorful classrooms and engaging
                activities to caring attention and meaningful child development,
                <strong> Dream Flower Pre-School & Day Care Bhubaneswar</strong>
                helps every child grow with happiness, curiosity, and success.
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
                </g>
              </svg>
            </div>
          </div>

          <div className={`${base}__gallery`}>
            {isMobile ? (
              <div className={`${base}__mobileSlider`}>
                <div
                  className={galleryImages[currentIndex].className}
                  onClick={() => setActiveImage(galleryImages[currentIndex])}
                >
                  <img
                    src={galleryImages[currentIndex].image}
                    alt={galleryImages[currentIndex].alt}
                  />
                </div>

                <div className={`${base}__controls`}>
                  <button onClick={prevSlide}>‹</button>
                  <span>
                    {currentIndex + 1} / {galleryImages.length}
                  </span>
                  <button onClick={nextSlide}>›</button>
                </div>

                <div className={`${base}__dots`}>
                  {galleryImages.map((_, i) => (
                    <span
                      key={i}
                      className={i === currentIndex ? "active" : ""}
                      onClick={() => setCurrentIndex(i)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className={`${base}__left`}>
                  <button
                    className={`${base}__imageButton ${base}__imageButton--main`}
                    onClick={() => setActiveImage(galleryImages[0])}
                  >
                    <div className={galleryImages[0].className}>
                      <img
                        src={galleryImages[0].image}
                        alt={galleryImages[0].alt}
                      />
                    </div>
                  </button>
                </div>

                <div className={`${base}__rightPanel`}>
                  <div className={`${base}__rightTopBar`}>
                    <div className={`${base}__rightPager`}>
                      <button
                        type="button"
                        className={`${base}__rightPagerBtn`}
                        onClick={prevRightPage}
                        aria-label="Previous right gallery page"
                      >
                        ‹
                      </button>

                      <span className={`${base}__rightPagerCount`}>
                        {String(rightPage + 1).padStart(2, "0")} /{" "}
                        {String(totalRightPages).padStart(2, "0")}
                      </span>

                      <button
                        type="button"
                        className={`${base}__rightPagerBtn`}
                        onClick={nextRightPage}
                        aria-label="Next right gallery page"
                      >
                        ›
                      </button>
                    </div>
                  </div>

                  <div className={`${base}__right ${base}__right--grid`}>
                    {paginatedRightImages.map((item, index) => (
                      <button
                        key={item.id}
                        className={`${base}__imageButton ${base}__imageButton--grid ${base}__stagger${
                          index + 1
                        }`}
                        onClick={() => setActiveImage(item)}
                      >
                        <div className={item.className}>
                          <img src={item.image} alt={item.alt} />
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className={`${base}__rightDotsWrap`}>
                    <div className={`${base}__rightDots`}>
                      {Array.from({ length: totalRightPages }).map(
                        (_, pageIndex) => (
                          <button
                            key={pageIndex}
                            type="button"
                            className={`${base}__rightDot ${
                              rightPage === pageIndex
                                ? `${base}__rightDot--active`
                                : ""
                            }`}
                            onClick={() => setRightPage(pageIndex)}
                            aria-label={`Go to right gallery page ${pageIndex + 1}`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div>
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
        >
          <div
            className={`${base}__modalCard`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${base}__close`}
              onClick={() => setActiveImage(null)}
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