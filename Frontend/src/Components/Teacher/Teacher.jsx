import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./Teacher.css";

import API, { IMAGE_URL } from "../../Api/axios";



const Teacher = () => {
  const base = "teacherSection";

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);

  /* ================= RESPONSIVE ================= */

  const [cardsPerPage, setCardsPerPage] =
    useState(3);

  const [currentPage, setCurrentPage] =
    useState(0);

  /* ================= FETCH ================= */

  const fetchTeachers = async () => {
    try {
      const res = await API.get("/teachers");

      setTeachers(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  /* ================= RESPONSIVE CARDS ================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 991) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  /* ================= PAGINATION ================= */

  const totalPages = Math.ceil(
    teachers.length / cardsPerPage
  );

  const paginatedTeachers = useMemo(() => {
    const start =
      currentPage * cardsPerPage;

    return teachers.slice(
      start,
      start + cardsPerPage
    );
  }, [teachers, currentPage, cardsPerPage]);

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev + 1 >= totalPages
        ? 0
        : prev + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev - 1 < 0
        ? totalPages - 1
        : prev - 1
    );
  };

  /* ================= ANIMATION ================= */

  useEffect(() => {
    const current = sectionRef.current;

    if (!current) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);

            observer.unobserve(current);
          }
        },
        { threshold: 0.14 }
      );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  /* ================= CARD ================= */

  const renderTeacherCard = (
    teacher,
    index
  ) => (
    <article
      key={teacher._id}
      className={`${base}__card ${
        visible
          ? `${base}__card--visible`
          : ""
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className={`${base}__imageWrap`}>
        <span
          className={`${base}__dotDecor ${base}__dotDecor--left`}
        ></span>

        <div className={`${base}__imageBlob`}>
          <img
            src={IMAGE_URL + teacher.image}
            alt={teacher.name}
          />
        </div>
      </div>

      <div className={`${base}__contentBox`}>
        <p className={`${base}__role`}>
          {teacher.role}
        </p>

        <h3 className={`${base}__name`}>
          {teacher.name}
        </h3>

        <p className={`${base}__text`}>
          {teacher.description}
        </p>
      </div>
    </article>
  );

  return (
    <section
      ref={sectionRef}
      className={`${base} ${
        visible ? `${base}--visible` : ""
      }`}
    >
      <div className={`${base}__container`}>

        {/* HEADER */}

        <div className={`${base}__header`}>
          <div className={`${base}__heading`}>
            <p className={`${base}__subTitle`}>
              Meet Our Professional
              Educators
            </p>

            <h2 className={`${base}__title`}>
              Teachers & Trainers
            </h2>

            <p className={`${base}__desc`}>
              At Dream Flower
              Pre-School & Day Care,
              our teachers create a
              joyful learning
              environment.
            </p>
          </div>
        </div>

        {/* PAGINATION CONTROLS */}

        {teachers.length > cardsPerPage && (
          <div
            className={`${base}__desktopTopControls`}
          >
            <button
              className={`${base}__desktopNavBtn`}
              onClick={prevPage}
            >
              ‹
            </button>

            <div
              className={`${base}__desktopDots`}
            >
              {Array.from({
                length: totalPages,
              }).map((_, index) => (
                <button
                  key={index}
                  className={`${base}__desktopDot ${
                    currentPage === index
                      ? `${base}__desktopDot--active`
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentPage(index)
                  }
                />
              ))}
            </div>

            <button
              className={`${base}__desktopNavBtn`}
              onClick={nextPage}
            >
              ›
            </button>
          </div>
        )}

        {/* GRID */}

        <div className={`${base}__grid`}>
          {paginatedTeachers.length >
          0 ? (
            paginatedTeachers.map(
              (teacher, index) =>
                renderTeacherCard(
                  teacher,
                  index
                )
            )
          ) : (
            <p>No Teachers Found</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Teacher;