import React, { useEffect, useMemo, useState } from "react";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const base = "testimonialSection";

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Mrs. Priya Sharma",
        role: "Happy Mother",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
        text: "Dream Flower Pre School has given my child a joyful, safe, and inspiring place to learn, play, and grow every day. The teachers are caring, patient, and full of positive energy. Through creative activities, playful classroom learning, and personal attention, I have seen a beautiful improvement in my child’s confidence, communication, creativity, and social development.",
      },
      {
        id: 2,
        name: "Mr. Ankit Verma",
        role: "Parent",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
        text: "We wanted a school that combines fun, care, values, and strong early learning, and Dream Flower Pre School truly exceeded our expectations. The environment is warm, colorful, and welcoming, and the teaching approach is engaging and child-friendly. My child feels excited to go to school every single day and comes home with new stories, smiles, and learning experiences.",
      },
      {
        id: 3,
        name: "Mrs. Sneha Das",
        role: "Working Mother",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
        text: "The best part about Dream Flower Pre School is the individual care and attention each child receives. The teachers are supportive, affectionate, and truly dedicated to early childhood development. The school creates a second home for children where they feel safe, happy, expressive, and motivated to learn through activities, stories, and joyful classroom interaction.",
      },
      {
        id: 4,
        name: "Mr. Rahul Nanda",
        role: "Guardian",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
        text: "From creative classroom activities to interactive teaching methods, everything at Dream Flower Pre School is designed with great care and thoughtfulness. My child has become more expressive, active, independent, and eager to explore new things. It is wonderful to see such a positive environment where learning feels joyful, natural, and exciting for young children.",
      },
      {
        id: 5,
        name: "Mrs. Pooja Mishra",
        role: "Parent",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
        text: "Dream Flower Pre School offers the perfect balance of education, care, values, and fun. The teachers build strong learning habits along with confidence, discipline, and kindness. The school atmosphere is full of positivity, warmth, and encouragement, and we are truly happy and proud to be a part of this beautiful learning journey for our child.",
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
            <span className={`${base}__eyebrow-icon`}>🌸</span>
            Happy Parents
          </span>

          <h2 className={`${base}__title`}>
            What Parents Say About Dream Flower Pre School
          </h2>

          <p className={`${base}__description`}>
           At Dream Flower Pre-School & Day Care Bhubaneswar, we provide a nurturing and joyful environment where children feel safe, valued, and excited to learn. Through storytelling, art, music, and playful activities, we build confidence, creativity, and strong early learning foundations for every child. 🌸📚✨
          </p>

          <p className={`${base}__description ${base}__description--extra`}>
            At Dream Flower Pre-School & Day Care Bhubaneswar, we make early education fun through storytelling, art, music, movement, and interactive learning. Every activity is designed to build confidence, creativity, and a strong foundation for a bright future. ✨
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

          <div className={`${base}__card`} key={activeTestimonial.id}>
            <div className={`${base}__grass`}></div>
            <div className={`${base}__flowers`}></div>

            <div className={`${base}__stars`}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p className={`${base}__text`}>{activeTestimonial.text}</p>

            <div className={`${base}__dots`}>.....</div>

            <div className={`${base}__author-block`}>
              <h3 className={`${base}__author-name`}>
                - {activeTestimonial.name}
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

            <p className={`${base}__newsletter-text ${base}__newsletter-text--extra`}>
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