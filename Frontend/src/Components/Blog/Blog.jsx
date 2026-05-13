import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./Blog.css";

import API from "../../api/axios";

import { useNavigate } from "react-router-dom";

import mainImg from "../../assets/Asserts of the Dream Flower School.webp";
import circleImg from "../../assets/04 (1).webp";
import painterGirl from "../../assets/Girl.webp";

const Blog = () => {

  const navigate = useNavigate();

  const base = "blogSection";

  const sectionRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [blogItems, setBlogItems] =
    useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* ======================================================
     FETCH BLOGS
  ====================================================== */

  useEffect(() => {

    fetchBlogs();

  }, []);

  const fetchBlogs = async () => {

    try {

      const res = await API.get("/news");

      console.log(
        "BLOG DATA:",
        res.data
      );

      const filtered = (
        res.data.data || []
      ).filter(
        (item) =>
          item.status === "Active"
      );

      setBlogItems(filtered);

    } catch (err) {

      console.error(
        "BLOG FETCH ERROR:",
        err
      );
    }
  };

  /* ======================================================
     ANIMATION
  ====================================================== */

  useEffect(() => {

    const current =
      sectionRef.current;

    if (!current) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (
            entry.isIntersecting
          ) {

            setVisible(true);

            observer.unobserve(
              current
            );
          }
        },
        {
          threshold: 0.15,
        }
      );

    observer.observe(current);

    return () =>
      observer.disconnect();

  }, []);

  /* ======================================================
     ARROW PAGINATION
  ====================================================== */

  const handleContentScroll = (
    direction
  ) => {

    if (!blogItems.length) return;

    if (direction === "down") {

      setCurrentIndex((prev) =>
        prev + 1 >=
        blogItems.length
          ? 0
          : prev + 1
      );

    } else {

      setCurrentIndex((prev) =>
        prev - 1 < 0
          ? blogItems.length - 1
          : prev - 1
      );
    }
  };

  /* ======================================================
     FORMAT DATE
  ====================================================== */

  const formatDate = (
    dateStr
  ) => {

    if (!dateStr)
      return "12 January 2026";

    const date = new Date(
      dateStr
    );

    return date.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  /* ======================================================
     REMOVE HTML
  ====================================================== */

  const stripHtml = (html) => {

    if (!html) return "";

    const div =
      document.createElement(
        "div"
      );

    div.innerHTML = html;

    return (
      div.textContent ||
      div.innerText ||
      ""
    );
  };

  /* ======================================================
     TRUNCATE
  ====================================================== */

  const truncateText = (
    text,
    max = 120
  ) => {

    if (!text) return "";

    return text.length > max
      ? text.slice(0, max) +
          "..."
      : text;
  };

  return (
    <section
      ref={sectionRef}
      className={`${base} ${
        visible
          ? `${base}--visible`
          : ""
      }`}
    >

      {/* BACKGROUND */}

      <div
        className={`${base}__topWave`}
      />

      <div
        className={`${base}__centerBand`}
      />

      <div
        className={`${base}__bottomWave`}
      />

      <div
        className={`${base}__container`}
      >

        <div
          className={`${base}__grid`}
        >

          {/* ======================================================
             LEFT SIDE
          ====================================================== */}

          <div
            className={`${base}__left`}
          >

            <div
              className={`${base}__scrollPanel`}
            >

              {/* HEADER */}

              <div
                className={`${base}__scrollHeader`}
              >

                <div
                  className={`${base}__titleWrap`}
                >

                  <img
                    src={
                      painterGirl
                    }
                    alt=""
                    className={`${base}__girl`}
                  />

                  <div
                    className={`${base}__titleContent`}
                  >

                    <p
                      className={`${base}__eyebrow`}
                    >
                      Blog
                    </p>

                    <h2
                      className={`${base}__title`}
                    >
                      News about our
                      Education
                    </h2>

                  </div>

                </div>

                {/* BUTTONS */}

                <div
                  className={`${base}__contentScrollActions`}
                >

                  <button
                    type="button"
                    className={`${base}__contentScrollBtn`}
                    onClick={() =>
                      handleContentScroll(
                        "up"
                      )
                    }
                  >
                    ↑
                  </button>

                  <button
                    type="button"
                    className={`${base}__contentScrollBtn`}
                    onClick={() =>
                      handleContentScroll(
                        "down"
                      )
                    }
                  >
                    ↓
                  </button>

                </div>

              </div>

              {/* ======================================================
                 SINGLE BLOG CARD
              ====================================================== */}

              <div
                className={`${base}__contentScroller`}
              >

                {blogItems.length >
                0 ? (

                  <div
                    className={`${base}__singleNewsWrap`}
                  >

                    <div
                      className={`${base}__item ${
                        base +
                        "__item--" +
                        (((currentIndex %
                          3) +
                          1))
                      }`}
                    >

                      {/* DATE */}

                      <div
                        className={`${base}__dateBox`}
                      >

                        <span
                          className={`${base}__calendar`}
                        >
                          📅
                        </span>

                        <span>
                          {formatDate(
                            blogItems[
                              currentIndex
                            ]?.date
                          )}
                        </span>

                      </div>

                      {/* CONTENT */}

                      <div
                        className={`${base}__itemContent`}
                      >

                        {/* CATEGORY */}

                        {blogItems[
                          currentIndex
                        ]?.category && (

                          <span
                            className={`${base}__category`}
                          >

                            {
                              blogItems[
                                currentIndex
                              ]
                                ?.category
                            }

                          </span>

                        )}

                        {/* TITLE */}

                        <h3
                          className={`${base}__itemTitle`}
                        >

                          {
                            blogItems[
                              currentIndex
                            ]?.title
                          }

                        </h3>

                        {/* DESCRIPTION */}

                        <p
                          className={`${base}__itemText`}
                        >

                          {truncateText(
                            stripHtml(
                              blogItems[
                                currentIndex
                              ]
                                ?.description
                            ),
                            160
                          )}

                        </p>

                      </div>

                      {/* PAGINATION */}

                      <div
                        className={`${base}__paginationDots`}
                      >

                        {blogItems.map(
                          (
                            _,
                            index
                          ) => (

                            <span
                              key={
                                index
                              }
                              className={`${base}__dot ${
                                currentIndex ===
                                index
                                  ? `${base}__dot--active`
                                  : ""
                              }`}
                            />

                          )
                        )}

                      </div>

                    </div>

                  </div>

                ) : (

                  <p
                    style={{
                      padding:
                        "20px",
                    }}
                  >
                    No blogs
                    available
                  </p>

                )}

              </div>

              {/* BUTTONS */}

              <div
                className={`${base}__leftBottomRow`}
              >

                <div
                  className={`${base}__actionRow`}
                >

                  <button
                    className={`${base}__button`}
                  >
                    Contact Us
                  </button>

                  <button
                    className={`${base}__readMoreBtn`}
                    onClick={() =>
                      navigate(
                        "/News-Details"
                      )
                    }
                  >
                    Read More
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* ======================================================
             RIGHT SIDE
          ====================================================== */}

          <div
            className={`${base}__right`}
          >

            <div
              className={`${base}__imageCard`}
            >

              <img
                src={mainImg}
                alt=""
              />

            </div>

            <div
              className={`${base}__circleImage`}
            >

              <img
                src={circleImg}
                alt=""
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Blog;