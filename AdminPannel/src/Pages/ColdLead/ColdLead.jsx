import React, { useEffect, useState } from "react";
import API from "../../Api/axois"; // adjust path
import "./ColdLead.css";

const initialFormState = {
  parentStudentName: "",
  addressCity: "",
  phoneNumber: "",
  email: "",
  childName: "",
  classInterested: "",
  message: "",
};

const ColdLead = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [coldLeadData, setColdLeadData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchColdLeads = async () => {
    try {
      setTableLoading(true);
      setErrorMessage("");

      const response = await API.get("/cold-leads");
      if (response?.data?.success) {
        setColdLeadData(response.data.data || []);
      } else {
        setColdLeadData([]);
      }
    } catch (error) {
      console.error("Fetch cold leads error:", error);
      setErrorMessage("Failed to fetch cold leads.");
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    fetchColdLeads();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEditId(null);
    setErrorMessage("");
  };

  const validateForm = () => {
    if (!formData.parentStudentName.trim()) {
      return "Parent / Student Name is required.";
    }
    if (!formData.addressCity.trim()) {
      return "Address / City is required.";
    }
    if (!formData.phoneNumber.trim()) {
      return "Phone Number is required.";
    }
    if (!formData.message.trim()) {
      return "Message is required.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationMessage = validateForm();

    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      if (editId) {
        const response = await API.put(`/cold-leads/${editId}`, formData);
        if (response?.data?.success) {
          await fetchColdLeads();
          resetForm();
          alert("Cold lead updated successfully.");
        }
      } else {
        const response = await API.post("/cold-leads", formData);
        if (response?.data?.success) {
          await fetchColdLeads();
          resetForm();
          alert("Cold lead created successfully.");
        }
      }
    } catch (error) {
      console.error("Submit cold lead error:", error);

      const backendMessage =
        error?.response?.data?.message ||
        "Something went wrong while saving data.";

      setErrorMessage(backendMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (lead) => {
    setFormData({
      parentStudentName: lead.parentStudentName || "",
      addressCity: lead.addressCity || "",
      phoneNumber: lead.phoneNumber || "",
      email: lead.email || "",
      childName: lead.childName || "",
      classInterested: lead.classInterested || "",
      message: lead.message || "",
    });

    setEditId(lead._id);
    setErrorMessage("");
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this cold lead?",
    );
    if (!confirmDelete) return;

    try {
      setErrorMessage("");

      const response = await API.delete(`/cold-leads/${id}`);
      if (response?.data?.success) {
        if (editId === id) {
          resetForm();
        }

        await fetchColdLeads();
        alert("Cold lead deleted successfully.");
      }
    } catch (error) {
      console.error("Delete cold lead error:", error);

      const backendMessage =
        error?.response?.data?.message || "Failed to delete cold lead.";

      setErrorMessage(backendMessage);
    }
  };

  return (
    <div className="ColdLead">
      <div className="ColdLead__wrapper">
        {/* Left Form Section */}
        <div className="ColdLead__formSection">
          <div className="ColdLead__formCard">
            <div className="ColdLead__formHeader">
              <h2 className="ColdLead__title">Cold Lead Form</h2>
              <p className="ColdLead__subtitle">
                Add enquiry details and manage your preschool lead records
                easily.
              </p>
            </div>

            {errorMessage && (
              <div className="ColdLead__errorMessage">{errorMessage}</div>
            )}

            <form className="ColdLead__form" onSubmit={handleSubmit}>
              <div className="ColdLead__field">
                <label className="ColdLead__label">
                  Parent / Student Name *
                </label>
                <input
                  type="text"
                  name="parentStudentName"
                  value={formData.parentStudentName}
                  onChange={handleChange}
                  placeholder="Parent / Student Name"
                  className="ColdLead__input"
                />
              </div>

              <div className="ColdLead__field">
                <label className="ColdLead__label">Address / City *</label>
                <input
                  type="text"
                  name="addressCity"
                  value={formData.addressCity}
                  onChange={handleChange}
                  placeholder="Address / City"
                  className="ColdLead__input"
                />
              </div>

              <div className="ColdLead__field">
                <label className="ColdLead__label">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="ColdLead__input"
                />
              </div>

              <div className="ColdLead__field">
                <label className="ColdLead__label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="ColdLead__input"
                />
              </div>

              <div className="ColdLead__field">
                <label className="ColdLead__label">Child Name</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Child Name"
                  className="ColdLead__input"
                />
              </div>

              <div className="ColdLead__field">
                <label className="ColdLead__label">Class Interested</label>
                <input
                  type="text"
                  name="classInterested"
                  value={formData.classInterested}
                  onChange={handleChange}
                  placeholder="Class Interested"
                  className="ColdLead__input"
                />
              </div>

              <div className="ColdLead__field">
                <label className="ColdLead__label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="ColdLead__textarea"
                />
              </div>

              <div className="ColdLead__buttonGroup">
                <button
                  type="submit"
                  className="ColdLead__submitBtn"
                  disabled={loading}
                >
                  {loading
                    ? "Processing..."
                    : editId
                      ? "Update Lead"
                      : "Submit Lead"}
                </button>

                {editId && (
                  <button
                    type="button"
                    className="ColdLead__cancelBtn"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Table Section */}
        <div className="ColdLead__tableSection">
          <div className="ColdLead__tableCard">
            <div className="ColdLead__tableHeader">
              <h2 className="ColdLead__title">Cold Lead Table</h2>
              <p className="ColdLead__subtitle">
                All submitted enquiry data will appear here.
              </p>
            </div>

            <div className="ColdLead__tableWrapper">
              <table className="ColdLead__table">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Parent / Student Name</th>
                    <th>Address / City</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Child Name</th>
                    <th>Class Interested</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {tableLoading ? (
                    <tr>
                      <td colSpan="9" className="ColdLead__emptyRow">
                        Loading data...
                      </td>
                    </tr>
                  ) : coldLeadData.length > 0 ? (
                    coldLeadData.map((lead, index) => (
                      <tr key={lead._id}>
                        <td>{index + 1}</td>
                        <td>{lead.parentStudentName}</td>
                        <td>{lead.addressCity}</td>
                        <td>{lead.phoneNumber}</td>
                        <td>{lead.email || "-"}</td>
                        <td>{lead.childName || "-"}</td>
                        <td>{lead.classInterested || "-"}</td>
                        <td className="ColdLead__messageCell">
                          {lead.message}
                        </td>
                        <td>
                          <div className="ColdLead__actionButtons">
                            <button
                              type="button"
                              className="ColdLead__editBtn"
                              onClick={() => handleEdit(lead)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="ColdLead__deleteBtn"
                              onClick={() => handleDelete(lead._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="ColdLead__emptyRow">
                        No cold lead data available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdLead;
