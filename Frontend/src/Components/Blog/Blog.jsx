import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";
import API from "../../api/axios"; // ✅ ADD

import mainImg from "../../assets/Written.webp";
import circleImg from "../../assets/paint.webp";
import painterGirl from "../../assets/Girl.webp";

const Blog = () => {
  const base = "blogSection";
  const sectionRef = useRef(null);
  const contentScrollRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [blogItems, setBlogItems] = useState([]); // ✅ dynamic

  /* ================= FETCH FROM BACKEND ================= */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get("/news");

        // only active posts
        const filtered = (res.data.data || []).filter(
          (item) => item.status === "Active"
        );

        setBlogItems(filtered);
      } catch (err) {
        console.error("BLOG FETCH ERROR:", err);
      }
    };

    fetchBlogs();
  }, []);

  /* ================= ANIMATION ================= */
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
      { threshold: 0.15 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  /* ================= SCROLL ================= */
  const handleContentScroll = (direction) => {
    if (!contentScrollRef.current) return;

    const amount = direction === "down" ? 220 : -220;

    contentScrollRef.current.scrollBy({
      top: amount,
      behavior: "smooth",
    });
  };

  /* ================= FORMAT DATE ================= */
  const formatDate = (dateStr) => {
    if (!dateStr) return "12 January 2026";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__topWave`} />
      <div className={`${base}__centerBand`} />
      <div className={`${base}__bottomWave`} />

      <div className={`${base}__container`}>
        <div className={`${base}__grid`}>
          <div className={`${base}__left`}>
            <div className={`${base}__scrollPanel`}>
              <div className={`${base}__scrollHeader`}>
                <div className={`${base}__titleWrap`}>
                  <img src={painterGirl} alt="" className={`${base}__girl`} />

                  <div className={`${base}__titleContent`}>
                    <p className={`${base}__eyebrow`}>Blog</p>
                    <h2 className={`${base}__title`}>
                      News about our Education
                    </h2>
                  </div>
                </div>

                <div className={`${base}__contentScrollActions`}>
                  <button
                    type="button"
                    className={`${base}__contentScrollBtn`}
                    onClick={() => handleContentScroll("up")}
                  >
                    ↑
                  </button>

                  <button
                    type="button"
                    className={`${base}__contentScrollBtn`}
                    onClick={() => handleContentScroll("down")}
                  >
                    ↓
                  </button>
                </div>
              </div>

              <div
                ref={contentScrollRef}
                className={`${base}__contentScroller`}
              >
                <div className={`${base}__list`}>
                  {blogItems.length > 0 ? (
                    blogItems.map((item, index) => (
                      <div
                        key={item._id}
                        className={`${base}__item ${
                          base + "__item--" + ((index % 3) + 1)
                        }`}
                      >
                        <div className={`${base}__dateBox`}>
                          <span className={`${base}__calendar`}>
                            📅
                          </span>
                          <span>{formatDate(item.date)}</span>
                        </div>

                        <div className={`${base}__itemContent`}>
                          <h3 className={`${base}__itemTitle`}>
                            {item.title}
                          </h3>
                          <p className={`${base}__itemText`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ padding: "20px" }}>
                      No blogs available
                    </p>
                  )}
                </div>
              </div>

              <div className={`${base}__leftBottomRow`}>
                <div className={`${base}__actionRow`}>
                  <button className={`${base}__button`}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (UNCHANGED) */}
          <div className={`${base}__right`}>
            <div className={`${base}__imageCard`}>
              <img src={mainImg} alt="" />
            </div>

            <div className={`${base}__circleImage`}>
              <img src={circleImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;