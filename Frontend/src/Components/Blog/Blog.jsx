import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";

import mainImg from "../../assets/Written.webp";
import circleImg from "../../assets/paint.webp";
import painterGirl from "../../assets/Girl.webp";

const Blog = () => {
  const base = "blogSection";
  const sectionRef = useRef(null);
  const contentScrollRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const blogItems = [
    {
      id: 1,
      title: "Kindergarten Outdoor Play Area",
      date: "Dec 29, 2022",
      text: "An overview aliquam sem fringilla ut morbi tincidunt augue interdum velit. Viverra adipiscing at...",
    },
    {
      id: 2,
      title: "Well Equipped With Indoor Class Rooms",
      date: "Dec 29, 2022",
      text: "An overview quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi...",
    },
    {
      id: 3,
      title: "Education Filled With Fun & Games",
      date: "Dec 29, 2022",
      text: "An overview nisl rhoncus mattis rhoncus urna. Pellentesque massa placerat duis ultricies lacus sed...",
    },
    {
      id: 4,
      title: "Creative Storytelling Sessions For Kids",
      date: "Dec 29, 2022",
      text: "An overview pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
    },
    {
      id: 5,
      title: "Joyful Learning Through Art & Craft",
      date: "Dec 29, 2022",
      text: "An overview facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla...",
    },
    {
      id: 6,
      title: "Safe And Friendly Day Care Programs",
      date: "Dec 29, 2022",
      text: "An overview viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare...",
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
      { threshold: 0.15 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const handleContentScroll = (direction) => {
    if (!contentScrollRef.current) return;

    const amount = direction === "down" ? 220 : -220;

    contentScrollRef.current.scrollBy({
      top: amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__topWave`} aria-hidden="true"></div>
      <div className={`${base}__centerBand`} aria-hidden="true"></div>
      <div className={`${base}__bottomWave`} aria-hidden="true"></div>

      <div className={`${base}__container`}>
        <div className={`${base}__topCenterDoodle`} aria-hidden="true">
          <svg viewBox="0 0 140 60" fill="none">
            <path
              d="M18 36c15-12 30-14 45-4 16 11 34 11 59 2"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M48 34c0-9 8-17 18-17s18 8 18 17"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="28" cy="10" r="2" fill="currentColor" />
            <circle cx="106" cy="12" r="2" fill="currentColor" />
            <circle cx="20" cy="19" r="1.8" fill="currentColor" />
            <circle cx="115" cy="20" r="1.8" fill="currentColor" />
          </svg>
        </div>

        <div className={`${base}__grid`}>
          <div className={`${base}__left`}>
            <div className={`${base}__scrollPanel`}>
              <div className={`${base}__scrollHeader`}>
                <div className={`${base}__titleWrap`}>
                  <img src={painterGirl} alt="" className={`${base}__girl`} />

                  <div className={`${base}__titleContent`}>
                    <p className={`${base}__eyebrow`}>Blog</p>
                    <h2 className={`${base}__title`}>News about our Education</h2>
                  </div>
                </div>

                <div className={`${base}__contentScrollActions`}>
                  <button
                    type="button"
                    className={`${base}__contentScrollBtn`}
                    onClick={() => handleContentScroll("up")}
                    aria-label="Scroll content up"
                  >
                    ↑
                  </button>

                  <button
                    type="button"
                    className={`${base}__contentScrollBtn`}
                    onClick={() => handleContentScroll("down")}
                    aria-label="Scroll content down"
                  >
                    ↓
                  </button>
                </div>
              </div>

              <div ref={contentScrollRef} className={`${base}__contentScroller`}>
                <div className={`${base}__list`}>
                  {blogItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`${base}__item ${base}__item--${(index % 3) + 1}`}
                    >
                      <div className={`${base}__dateBox`}>
                        <span className={`${base}__calendar`} aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect
                              x="4"
                              y="6"
                              width="16"
                              height="14"
                              rx="2"
                              stroke="currentColor"
                              strokeWidth="1.9"
                            />
                            <path
                              d="M8 4v4M16 4v4M4 10h16"
                              stroke="currentColor"
                              strokeWidth="1.9"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        <span>Dec 29,</span>
                        <span>2022</span>
                      </div>

                      <div className={`${base}__itemContent`}>
                        <h3 className={`${base}__itemTitle`}>{item.title}</h3>
                        <p className={`${base}__itemText`}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${base}__leftBottomRow`}>
                <div className={`${base}__duck`} aria-hidden="true">
                  <svg viewBox="0 0 90 90" fill="none">
                    <path
                      d="M23 50c0-12 10-21 22-21 14 0 25 11 25 25 0 12-10 22-23 22H31c-10 0-18-8-18-18 0-8 5-14 10-17"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="38" cy="36" r="2.5" fill="currentColor" />
                    <path
                      d="M18 38h10l8 5-8 5H18"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className={`${base}__actionRow`}>
                  <button className={`${base}__button`}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${base}__right`}>
            <div className={`${base}__imageCard`}>
              <img src={mainImg} alt="Children in classroom" />
            </div>

            <div className={`${base}__circleImage`}>
              <img src={circleImg} alt="Children playing with blocks" />
            </div>

            <div className={`${base}__trainPath`} aria-hidden="true">
              <div className={`${base}__train`}>
                <svg viewBox="0 0 170 70" fill="none">
                  <path
                    d="M25 48c18 28 48 29 74 10 15-12 30-14 48-8"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeDasharray="3 6"
                    strokeLinecap="round"
                  />
                  <g transform="translate(0 10)">
                    <rect
                      x="0"
                      y="20"
                      width="34"
                      height="22"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2.6"
                    />
                    <rect
                      x="34"
                      y="14"
                      width="22"
                      height="28"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2.6"
                    />
                    <path
                      d="M39 14V6h10"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="46"
                      r="4.5"
                      stroke="currentColor"
                      strokeWidth="2.6"
                    />
                    <circle
                      cx="38"
                      cy="46"
                      r="4.5"
                      stroke="currentColor"
                      strokeWidth="2.6"
                    />
                  </g>
                  <path d="M156 34l10 5-10 5" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={`${base}__rocket`} aria-hidden="true">
          <svg viewBox="0 0 70 110" fill="none">
            <path
              d="M35 6c16 12 18 36 18 52 0 18-7 30-18 46-11-16-18-28-18-46 0-16 2-40 18-52Z"
              fill="#dbe9f3"
              stroke="#7aa0b8"
              strokeWidth="2.5"
            />
            <circle
              cx="35"
              cy="38"
              r="8"
              fill="#ffa54f"
              stroke="#f07818"
              strokeWidth="2.3"
            />
            <path
              d="M23 66 14 78l13-3M47 66l9 12-13-3"
              fill="#ff8458"
              stroke="#f07818"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M29 88c2 8 4 13 6 16 2-3 4-8 6-16"
              fill="#ffb347"
              stroke="#f07818"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Blog;