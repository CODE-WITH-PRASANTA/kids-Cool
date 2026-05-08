import React, { useEffect, useMemo, useState } from "react";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";

const Testimonial = () => {
  const base = "testimonialSection";

  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const activeTestimonial = testimonials[activeIndex] || {};

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await API.get("/testimonials");

        const filtered = (res.data.data || []).filter(
          (item) => item.status === "Active",
        );

        setTestimonials(filtered);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonials]);
  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__top`}>
          <span className={`${base}__eyebrow`}>
            <span className={`${base}__eyebrow-icon`}>🌸</span>
            Happy Parents
          </span>

          <h2 className={`${base}__title`}>
            What Parents Say About Dream Flower Pre School
          </h2>

          <p className={`${base}__description`}>
            At Dream Flower Pre-School & Day Care Bhubaneswar, we provide a
            nurturing and joyful environment where children feel safe, valued,
            and excited to learn. Through storytelling, art, music, and playful
            activities, we build confidence, creativity, and strong early
            learning foundations for every child. 🌸📚✨
          </p>

          <p className={`${base}__description ${base}__description--extra`}>
            At Dream Flower Pre-School & Day Care Bhubaneswar, we make early
            education fun through storytelling, art, music, movement, and
            interactive learning. Every activity is designed to build
            confidence, creativity, and a strong foundation for a bright future.
            ✨
          </p>

          <div className={`${base}__dashed-arrow`}></div>
        </div>

        <div className={`${base}__testimonial-wrap`}>
          <div className={`${base}__rocket`}>
            <div className={`${base}__rocket-body`}>
              <span className={`${base}__rocket-window`}></span>
              <span
                className={`${base}__rocket-fin ${base}__rocket-fin--left`}
              ></span>
              <span
                className={`${base}__rocket-fin ${base}__rocket-fin--right`}
              ></span>
              <span className={`${base}__rocket-fire`}></span>
            </div>
            <span className={`${base}__rocket-line`}></span>
          </div>

          <span className={`${base}__bug ${base}__bug--left`}>🕷️</span>
          <span className={`${base}__bug ${base}__bug--right`}>🕷️</span>

          <div className={`${base}__card`} key={activeTestimonial._id}>
            <div className={`${base}__grass`}></div>
            <div className={`${base}__flowers`}></div>

            <div className={`${base}__stars`}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p className={`${base}__text`}>{activeTestimonial.reviewText}</p>

            <div className={`${base}__dots`}>.....</div>

            <div className={`${base}__author-block`}>
              <h3 className={`${base}__author-name`}>
                - {activeTestimonial.parentName}
              </h3>
              <p className={`${base}__author-role`}>Parent</p>
            </div>

            <div className={`${base}__avatar-ring`}>
              <img
                src={
                  activeTestimonial.image
                    ? IMAGE_URL + activeTestimonial.image
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                }
               alt={activeTestimonial.parentName}
                className={`${base}__avatar`}
              />
            </div>

            <div className={`${base}__waves`}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={`${base}__little-flowers`}></div>
          </div>

          <div className={`${base}__stars-group`}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <div className={`${base}__bottom`}>
          <div className={`${base}__bottom-left-shape`}>
            <span className={`${base}__planet`}></span>
          </div>

          <div className={`${base}__newsletter`}>
            <span className={`${base}__newsletter-tag`}>Newsletter</span>
            <h3 className={`${base}__newsletter-title`}>
              Subscribe For Updates From Dream Flower Pre School
            </h3>
            <p className={`${base}__newsletter-text`}>
              Stay connected with Dream Flower Pre School & Day Care and receive
              the latest updates about admissions, school activities, special
              events, learning programs, celebrations, and joyful classroom
              moments from our little stars. Join our school family and stay
              informed about everything that makes our learning journey so
              special.
            </p>

            <p
              className={`${base}__newsletter-text ${base}__newsletter-text--extra`}
            >
              From creative events and fun learning sessions to important school
              announcements and child development highlights, our updates help
              parents stay close to every beautiful step of their child’s early
              education journey.
            </p>

            <div className={`${base}__form`}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={`${base}__input`}
              />
              <button className={`${base}__button`}>Subscribe Now</button>
            </div>
          </div>

          <div className={`${base}__ufo`}>
            <span className={`${base}__ufo-top`}></span>
            <span className={`${base}__ufo-base`}></span>
            <span className={`${base}__ufo-leg ${base}__ufo-leg--one`}></span>
            <span className={`${base}__ufo-leg ${base}__ufo-leg--two`}></span>
            <span className={`${base}__ufo-leg ${base}__ufo-leg--three`}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
