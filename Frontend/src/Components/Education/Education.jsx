import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./Education.css";

import API, { IMAGE_URL } from "../../Api/axios";

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

  /* ================= BACKEND GALLERY ================= */

  const [galleryImages, setGalleryImages] = useState([]);

  const fetchGallery = async () => {
    try {
      const res = await API.get("/gallery");

      const data = res.data.data.map((item, index) => ({
        id: item._id,
        image: IMAGE_URL + item.image,
        alt: `Gallery Image ${index + 1}`,
        className: `${base}__card ${base}__card--rightGrid`,
      }));

      setGalleryImages(data);
    } catch (err) {
      console.log("Gallery Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ================= PAGINATION ================= */

  const totalRightPages =
    Math.ceil(galleryImages.length / imagesPerPage) || 1;

  const paginatedRightImages = useMemo(() => {
    const start = rightPage * imagesPerPage;

    return galleryImages.slice(
      start,
      start + imagesPerPage
    );
  }, [galleryImages, rightPage]);

  /* ================= RESPONSIVE ================= */

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);

    check();

    window.addEventListener("resize", check);

    return () =>
      window.removeEventListener("resize", check);
  }, []);

  /* ================= ANIMATION ================= */

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

  /* ================= ESC ================= */

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
      document.removeEventListener(
        "keydown",
        handleEsc
      );

      document.body.style.overflow = "";
    };
  }, [activeImage]);

  /* ================= MOBILE SLIDER ================= */

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % galleryImages.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + galleryImages.length) %
        galleryImages.length
    );
  };

  /* ================= PAGINATION ================= */

  const nextRightPage = () => {
    setRightPage(
      (prev) => (prev + 1) % totalRightPages
    );
  };

  const prevRightPage = () => {
    setRightPage(
      (prev) =>
        (prev - 1 + totalRightPages) %
        totalRightPages
    );
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={`${base} ${
          isVisible ? `${base}--visible` : ""
        }`}
      >
        <div className={`${base}__container`}>

          {/* ================= TOP SECTION ================= */}

          <div className={`${base}__topDecor`}>

            <div className={`${base}__doodle ${base}__doodle--left`}>
              <svg viewBox="0 0 120 120" fill="none">
                <g
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M60 16V8" />
                  <path d="M80 20l4-7" />
                  <path d="M97 35l7-4" />
                  <path d="M104 58h8" />
                  <path d="M97 81l7 4" />
                  <path d="M80 96l4 7" />
                  <path d="M60 104v8" />
                </g>
              </svg>
            </div>

            <div className={`${base}__headingWrap`}>
              <div className={`${base}__labelRow`}>
                <span className={`${base}__stars`}>
                  ★ ★ ★
                </span>

                <p className={`${base}__subTitle`}>
                  Our Enviromental Gallery
                </p>
              </div>

              <h3 className={`${base}__title`}>
                Best Pre-School & Day Care in
                Bhubaneswar for Joyful Early Learning
              </h3>

              <p className={`${base}__desc`}>
                Welcome to
                <strong>
                  {" "}
                  Dream Flower Pre-School &
                  Day Care Bhubaneswar
                </strong>
                , a warm, safe, and inspiring
                learning space where every child
                feels happy, confident, and cared
                for.
              </p>

              <p className={`${base}__extraDesc`}>
                As a trusted
                <strong>
                  {" "}
                  pre-school and day care in
                  Bhubaneswar
                </strong>
                , we focus on building
                communication, creativity, social
                skills, confidence, discipline,
                and strong learning foundations.
              </p>
            </div>

          </div>

          {/* ================= GALLERY ================= */}

          <div className={`${base}__gallery`}>

            {isMobile ? (
              <div className={`${base}__mobileSlider`}>

                {galleryImages.length > 0 && (
                  <>
                    <div
                      className={`${base}__card ${base}__card--hero`}
                      onClick={() =>
                        setActiveImage(
                          galleryImages[currentIndex]
                        )
                      }
                    >
                      <img
                        src={
                          galleryImages[currentIndex]
                            ?.image
                        }
                        alt={
                          galleryImages[currentIndex]
                            ?.alt
                        }
                      />
                    </div>

                    <div className={`${base}__controls`}>
                      <button onClick={prevSlide}>
                        ‹
                      </button>

                      <span>
                        {currentIndex + 1} /{" "}
                        {galleryImages.length}
                      </span>

                      <button onClick={nextSlide}>
                        ›
                      </button>
                    </div>

                    <div className={`${base}__dots`}>
                      {galleryImages.map((_, i) => (
                        <span
                          key={i}
                          className={
                            i === currentIndex
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            setCurrentIndex(i)
                          }
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                {/* ================= RIGHT PANEL ================= */}

                <div className={`${base}__rightPanel`}>

                  <div className={`${base}__rightTopBar`}>
                    <div className={`${base}__rightPager`}>

                      <button
                        type="button"
                        className={`${base}__rightPagerBtn`}
                        onClick={prevRightPage}
                      >
                        ‹
                      </button>

                      <span
                        className={`${base}__rightPagerCount`}
                      >
                        {String(
                          rightPage + 1
                        ).padStart(2, "0")}{" "}
                        /{" "}
                        {String(
                          totalRightPages
                        ).padStart(2, "0")}
                      </span>

                      <button
                        type="button"
                        className={`${base}__rightPagerBtn`}
                        onClick={nextRightPage}
                      >
                        ›
                      </button>

                    </div>
                  </div>

                  <div
                    className={`${base}__right ${base}__right--grid`}
                  >
                    {paginatedRightImages.map(
                      (item, index) => (
                        <button
                          key={item.id}
                          className={`${base}__imageButton ${base}__imageButton--grid`}
                          onClick={() =>
                            setActiveImage(item)
                          }
                        >
                          <div
                            className={item.className}
                          >
                            <img
                              src={item.image}
                              alt={item.alt}
                            />
                          </div>
                        </button>
                      )
                    )}
                  </div>

                </div>
              </>
            )}

          </div>
        </div>

        {/* ================= KIDS IMAGE ================= */}

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

      {/* ================= MODAL ================= */}

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
              onClick={() =>
                setActiveImage(null)
              }
            >
              ×
            </button>

            <div
              className={`${base}__modalImageWrap`}
            >
              <img
                src={activeImage.image}
                alt={activeImage.alt}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Education;