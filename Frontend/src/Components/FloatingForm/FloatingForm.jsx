import React, { useEffect, useState } from "react";
import "./FloatingForm.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import API from "../../api/axios"; // ✅ ADD

const Floatingform = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowForm(false);
  };

  // ✅ INPUT HANDLE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ CONNECT BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.address ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const payload = {
        parentStudentName: formData.name,
        addressCity: formData.address,
        phoneNumber: formData.phone,
        email: "", // optional
        childName: "", // optional
        classInterested: "Enquiry",
        message: formData.message,
      };

      const res = await API.post("/cold-leads", payload);

      if (res?.data?.success) {
        alert("Enquiry submitted successfully ✅");

        setFormData({
          name: "",
          address: "",
          phone: "",
          message: "",
        });

        setShowForm(false);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit enquiry ❌");
    }
  };

  if (!showForm) return null;

  return (
    <div className="floatingForm">
      <div className="floatingForm__overlay" onClick={handleClose}></div>

      <div className="floatingForm__card">
        <button className="floatingForm__close" onClick={handleClose}>
          <IoClose />
        </button>

        <h2 className="floatingForm__title">Dream Flower Pre School</h2>

        <p className="floatingForm__subtitle">
          Student Enrollment Enquiry
        </p>

        <p className="floatingForm__desc">
          Give your child a strong foundation for success. Share your details and we’ll guide you through the next steps.
        </p>

        <form className="floatingForm__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Parent / Student Name"
            className="floatingForm__input"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address / City"
            className="floatingForm__input"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="floatingForm__input"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            className="floatingForm__textarea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="floatingForm__submit">
            Submit Enquiry
          </button>
        </form>

        <div className="floatingForm__divider">OR</div>

        <div className="floatingForm__actions">
          <button
            className="floatingForm__call"
            onClick={() => (window.location.href = "tel:9876543210")}
          >
            <FaPhoneAlt /> Call Us
          </button>

          <button
            className="floatingForm__whatsapp"
            onClick={() =>
              window.open(
                `https://wa.me/919876543210?text=Hello, I want admission details`,
                "_blank"
              )
            }
          >
            <FaWhatsapp /> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floatingform;