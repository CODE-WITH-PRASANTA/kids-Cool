import React, { useEffect, useRef, useState } from "react";
import "./Teacher.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import teacher1 from "../../assets/Cool1.webp";
import teacher2 from "../../assets/Cool2.webp";

const Teacher = () => {
  const base = "teacherSection";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await API.get("/teachers");

        // show only active teachers
        const filtered = (res.data.data || []).filter(
          (t) => t.status === "Active",
        );

        setTeachers(filtered);
      } catch (err) {
        console.log("FETCH ERROR:", err);
      }
    };

    fetchTeachers();
  }, []);

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
      { threshold: 0.14 },
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const teachers = [
    {
      id: 1,
      name: "Miss Swetalin swain",
      role: "Early Learning Mentor",
      image: teacher1,
      description:
        "Miss Swetalin Swain is a passionate early childhood educator at Dream Flower Pre-School & Day Care, dedicated to creating a warm, caring, and joyful learning environment for young children.She believes that the early years are the foundation of a child’s future, and her teaching approach focuses on nurturing confidence, communication, and emotional well-being.",
    },
    {
      id: 2,
      name: "Miss Swagatika",
      role: "Creative Activity Trainer",
      image: teacher2,
      description:
        "Miss Swagatika is a creative and energetic activity trainer at Dream Flower Pre-School & Day Care, known for making every day exciting and colorful for children.She believes that creativity plays a vital role in early childhood development and ensures that every child enjoys a playful and enriching learning experience.",
    },
  ];

  const renderTeacherCard = (teacher, index) => (
    <article
      key={teacher._id}
      className={`${base}__card ${
        visible ? `${base}__card--visible` : ""
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`${base}__imageWrap`}>
        <span
          className={`${base}__dotDecor ${base}__dotDecor--left`}
        ></span>

        <div className={`${base}__imageBlob`}>
          <img
            src={
              teacher.image
                ? IMAGE_URL + teacher.image
                : "https://via.placeholder.com/300"
            }
            alt={teacher.name}
          />
        </div>
      </div>

      <div className={`${base}__contentBox`}>
        <p className={`${base}__role`}>{teacher.role}</p>
        <h3 className={`${base}__name`}>{teacher.name}</h3>
        <p className={`${base}__text`}>{teacher.description}</p>

        <div className={`${base}__socials`}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </article>
  );

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__container`}>

        {/* HEADER */}
        <div className={`${base}__header`}>
          <div className={`${base}__heading`}>
            <p className={`${base}__subTitle`}>
              Meet Our Professional Educators
            </p>

            <h2 className={`${base}__title`}>
              Teachers & Trainers
            </h2>

            <p className={`${base}__desc`}>
              At Dream Flower Pre-School & Day Care, our teachers create a joyful learning environment.
            </p>
          </div>
        </div>

        {/* CENTERED GRID */}
        <div className={`${base}__grid`}>
          {teachers.map((teacher, index) =>
            renderTeacherCard(teacher, index)
          )}
        </div>

      </div>
    </section>
  );
};

export default Teacher;
