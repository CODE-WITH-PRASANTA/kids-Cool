import React, { useEffect, useRef, useState } from "react";
import "./Galleryposting.css";

import API, { IMAGE_URL } from "../../Api/axois";

const Galleryposting = () => {
  const [form, setForm] = useState({
    image: null,
    preview: "",
  });

  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fileRef = useRef(null);
  const itemsPerPage = 5;

  /* ================= FETCH ================= */
  const fetchGallery = async () => {
    try {
      const res = await API.get("/gallery");

      const data = res.data.data.map((item) => ({
        id: item._id,
        image: item.image,
        preview: IMAGE_URL + item.image,
      }));

      setList(data);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({
      image: file,
      preview: URL.createObjectURL(file),
    });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.image && !editId) {
      alert("Upload image");
      return;
    }

    const formData = new FormData();
    if (form.image) formData.append("image", form.image);

    try {
      if (editId) {
        await API.put(`/gallery/${editId}`, formData);
      } else {
        await API.post("/gallery", formData);
      }

      fetchGallery();

      setForm({ image: null, preview: "" });
      setEditId(null);

      if (fileRef.current) fileRef.current.value = "";
      setCurrentPage(1);
    } catch (err) {
      console.error("SUBMIT ERROR:", err);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      await API.delete(`/gallery/${id}`);
      fetchGallery();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setForm({
      image: null,
      preview: item.preview,
    });
    setEditId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= PAGINATION ================= */
  const totalPages =
    Math.ceil(list.length / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedList = list.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="galleryposting">
      <div className="galleryposting__wrapper">
        
        {/* LEFT FORM */}
        <div className="galleryposting__left">
          <div className="galleryposting__card">
            <div className="galleryposting__header">
              <h2 className="galleryposting__title">
                Gallery Posting Form
              </h2>
              <p className="galleryposting__subtitle">
                Upload gallery images for your admin panel.
              </p>
            </div>

            <form
              className="galleryposting__form"
              onSubmit={handleSubmit}
            >
              <div className="galleryposting__formGroup">
                <label className="galleryposting__label">
                  Upload Image
                </label>

                <input
                  type="file"
                  ref={fileRef}
                  className="galleryposting__fileInput"
                  onChange={handleImageChange}
                />
              </div>

              {form.preview && (
                <div className="galleryposting__previewBox">
                  <img
                    src={form.preview}
                    alt="preview"
                    className="galleryposting__previewImage"
                  />
                </div>
              )}

              <button className="galleryposting__submitBtn">
                {editId ? "Update Image" : "Upload Image"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT TABLE */}
        <div className="galleryposting__right">
          <div className="galleryposting__card">
            <div className="galleryposting__header">
              <h2 className="galleryposting__title">
                Gallery Table
              </h2>
              <p className="galleryposting__subtitle">
                All uploaded images appear here.
              </p>
            </div>

            <div className="galleryposting__tableWrap">
              <table className="galleryposting__table">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedList.length > 0 ? (
                    paginatedList.map((item, index) => (
                      <tr key={item.id}>
                        <td>{startIndex + index + 1}</td>

                        <td>
                          <div className="galleryposting__imageCell">
                            <img
                              src={item.preview}
                              alt=""
                              className="galleryposting__tableImage"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="galleryposting__actionButtons">
                            <button
                              className="galleryposting__actionBtn galleryposting__actionBtn--edit"
                              onClick={() => handleEdit(item)}
                            >
                              Edit
                            </button>

                            <button
                              className="galleryposting__actionBtn galleryposting__actionBtn--delete"
                              onClick={() =>
                                handleDelete(item.id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="galleryposting__empty">
                        No images uploaded
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            {list.length > 0 && (
              <div className="galleryposting__pagination">
                <button
                  className="galleryposting__pageBtn"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => prev - 1)
                  }
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`galleryposting__pageBtn ${
                      currentPage === i + 1
                        ? "galleryposting__pageBtn--active"
                        : ""
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="galleryposting__pageBtn"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                  }
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Galleryposting;