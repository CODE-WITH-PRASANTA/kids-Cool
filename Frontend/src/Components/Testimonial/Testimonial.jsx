import React, { useEffect, useMemo, useState } from "react";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const base = "testimonialSection";

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Noah Emma",
        role: "Business Head",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
        text: "Quisque egestas ipsum vitae erat faucibus, non volutpat arcu faucibus. Phasellus auctor sed ligula in bibendum. Maecenas vel ultrices nulla. Aliquam nunc nulla, consectetur quis varius eget, tempor a nisi. Integer hendrerit viverra enim, in mattis purus fermentum et. Quisque sit amet enim a arcu euismod dapibus eget sit amet est.",
      },
      {
        id: 2,
        name: "Sophia Martin",
        role: "Happy Mother",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
        text: "The school environment feels warm, creative, and safe. My child enjoys every activity and comes home excited to share new things learned in class. The teachers are caring, patient, and truly supportive.",
      },
      {
        id: 3,
        name: "Liam Johnson",
        role: "Parent",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
        text: "We were searching for a place that balances fun and education, and this school exceeded our expectations. The communication with parents is excellent and the overall atmosphere is beautiful and welcoming.",
      },
      {
        id: 4,
        name: "Emily Watson",
        role: "Guardian",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
        text: "I love how the curriculum mixes creativity, discipline, and confidence building. The staff is kind, professional, and always ready to help. It has been a wonderful experience for our family.",
      },
      {
        id: 5,
        name: "Daniel Carter",
        role: "Working Parent",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
        text: "From the classroom setup to the outdoor activities, everything feels thoughtfully planned. My child has become more expressive, confident, and eager to learn since joining this program.",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__top`}>
          <span className={`${base}__eyebrow`}>
            <span className={`${base}__eyebrow-icon`}>🪐</span>
            Happy Parents
          </span>

          <h2 className={`${base}__title`}>Our Testimonials</h2>

          <p className={`${base}__description`}>
            Quasellus gravida lacus quis eros lobortis, nec dapibus quam
            gravida. Duis sed augue vitae felis pellentesque varius nec quis
            nunc. Morbi mauris augue, pulvinar quis luctus eget.
          </p>

          <div className={`${base}__dashed-arrow`}></div>
        </div>

        <div className={`${base}__testimonial-wrap`}>
          <div className={`${base}__rocket`}>
            <div className={`${base}__rocket-body`}>
              <span className={`${base}__rocket-window`}></span>
              <span className={`${base}__rocket-fin ${base}__rocket-fin--left`}></span>
              <span className={`${base}__rocket-fin ${base}__rocket-fin--right`}></span>
              <span className={`${base}__rocket-fire`}></span>
            </div>
            <span className={`${base}__rocket-line`}></span>
          </div>

          <span className={`${base}__bug ${base}__bug--left`}>🕷️</span>
          <span className={`${base}__bug ${base}__bug--right`}>🕷️</span>

          <div className={`${base}__card`} key={activeTestimonial.id}>
            <div className={`${base}__grass`}></div>
            <div className={`${base}__flowers`}></div>

            <div className={`${base}__stars`}>
              {[...Array(6)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p className={`${base}__text`}>{activeTestimonial.text}</p>

            <div className={`${base}__dots`}>.....</div>

            <div className={`${base}__author-block`}>
              <h3 className={`${base}__author-name`}>
                -{activeTestimonial.name}
              </h3>
              <p className={`${base}__author-role`}>
                {activeTestimonial.role}
              </p>
            </div>

            <div className={`${base}__avatar-ring`}>
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
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
            <span className={`${base}__newsletter-tag`}>News Letter</span>
            <h3 className={`${base}__newsletter-title`}>
              Subscribe To Get the Latest News About us
            </h3>
            <p className={`${base}__newsletter-text`}>
              Horbi mauris augue, pulvinar quis luctus eget. Phasellus gravida
              lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue
              vitae felis pellentesque varius nec quis nunc.
            </p>

            <div className={`${base}__form`}>
              <input
                type="email"
                placeholder="Your Mail Address Here.."
                className={`${base}__input`}
              />
              <button className={`${base}__button`}>
                Subscribe
              </button>
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