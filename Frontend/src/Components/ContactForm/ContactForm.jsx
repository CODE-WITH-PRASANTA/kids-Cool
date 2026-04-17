import "./ContactForm.css";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import child1 from "../../assets/a1.webp";
import child2 from "../../assets/a2.webp";

const Contactfrom = () => {
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    parentName: "",
    parentDesignation: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        parentStudentName: formData.parentName,
        addressCity: "N/A",
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        childName: formData.childName,
        classInterested: "N/A",
        message: `DOB: ${formData.dob}, Designation: ${formData.parentDesignation}`,
      };

      const res = await API.post("/cold-leads", payload);

      if (res?.data?.success) {
        alert("Enquiry submitted successfully ✅");
        setFormData({
          childName: "",
          dob: "",
          parentName: "",
          parentDesignation: "",
          email: "",
          phoneNumber: "",
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit enquiry ❌");
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="admission-section">
      <div className="admission-container">
        {/* LEFT IMAGES */}
        <div className="admission-images reveal">
          <img
            src={child1}
            alt="child"
            className="admission-img admission-img-top"
          />

          <img
            src={child2}
            alt="child"
            className="admission-img admission-img-bottom"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="admission-content">
          <h2 className="admission-title reveal">Apply For Admission</h2>

          <div className="admission-features">
            <div className="reveal" style={{ transitionDelay: "0.1s" }}>
              <p>
                <FaCheckCircle /> Assign practice exercises
              </p>
              <p>
                <FaCheckCircle /> Track student progress
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              <p>
                <FaCheckCircle /> Videos and articles
              </p>
              <p>
                <FaCheckCircle /> Join millions of students
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            className="admission-form reveal"
            style={{ transitionDelay: "0.3s" }}
            onSubmit={handleSubmit}
          >
            <div className="admission-form-grid">
              <div className="admission-field">
                <label>
                  Child's Name <span>(Required)</span>
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                />
              </div>

              <div className="admission-field">
                <label>
                  Child's DOB <span>(Required)</span>
                </label>

                <div className="admission-date">
                  <input
                    type="text"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="dd-mm-yyyy"
                  />
                  <FiCalendar />
                </div>
              </div>

              <div className="admission-field">
                <label>
                  Parent's Name <span>(Required)</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                />{" "}
              </div>

              <div className="admission-field">
                <label>
                  Parent's Designation <span>(Required)</span>
                </label>
                <input
                  type="text"
                  name="parentDesignation"
                  value={formData.parentDesignation}
                  onChange={handleChange}
                />{" "}
              </div>

              <div className="admission-field">
                <label>
                  Email <span>(Required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />{" "}
              </div>

              <div className="admission-field">
                <label>Phone No</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />{" "}
              </div>
            </div>

            <div className="admission-bottom">
              <label className="admission-checkbox">
                <input type="checkbox" />
                Notify Your child weekly progress
              </label>
              <button type="submit" className="admission-btn">
                Apply Now
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactfrom;
