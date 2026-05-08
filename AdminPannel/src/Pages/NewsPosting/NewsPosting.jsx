import React, { useEffect, useMemo, useState } from "react";
import "./NewsPosting.css";
import API, { IMAGE_URL } from "../../Api/axois";

import {
  FaCalendarAlt,
  FaEdit,
  FaEye,
  FaTrash,
  FaPlus,
  FaTimes,
  FaStar,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const NewsPosting = () => {

  const base = "newsPostingAdmin";

  const initialForm = {
    image: "",
    date: "",
    title: "",
    category: "",
    description: "",
    buttonText: "Read More",
    link: "",
    status: "Active",
    featured: false,
    order: 1,
  };

  const [form, setForm] = useState(initialForm);

  const [previewImage, setPreviewImage] = useState("");

  const [editId, setEditId] = useState(null);

  const [viewPost, setViewPost] = useState(null);

  const [posts, setPosts] = useState([]);

  /* ================= FETCH ================= */

  useEffect(() => {

    const fetchNews = async () => {

      try {

        const res = await API.get("/news");

        setPosts(res.data.data || []);

      } catch (err) {

        console.error("FETCH ERROR:", err);

      }
    };

    fetchNews();

  }, []);

  /* ================= FORMAT ================= */

  const formatDate = (dateStr) => {

    if (!dateStr) return "12 January 2026";

    const date = new Date(dateStr);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const truncateText = (text, max = 110) => {

    if (!text) {
      return "Write a short news description for preview display.";
    }

    return text.length > max
      ? `${text.slice(0, max)}...`
      : text;
  };

  /* ================= PREVIEW ================= */

  const displayPreview = useMemo(
    () => ({
      image:
        previewImage ||
        (form.image
          ? IMAGE_URL + form.image
          : "") ||
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",

      date: formatDate(form.date),

      title:
        form.title ||
        "New Academic Session Admissions Open",

      description: truncateText(form.description),

      buttonText: form.buttonText,

      featured: form.featured,

      status: form.status,

      link: form.link,
    }),
    [form, previewImage]
  );

  /* ================= HANDLE ================= */

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {

        const res = await API.put(
          `/news/${editId}`,
          form
        );

        setPosts((prev) =>
          prev.map((item) =>
            item._id === editId
              ? res.data.data
              : item
          )
        );

        setEditId(null);

      } else {

        const res = await API.post(
          "/news",
          form
        );

        setPosts((prev) => [
          ...prev,
          res.data.data,
        ]);
      }

      setForm(initialForm);

      setPreviewImage("");

    } catch (err) {

      console.error(
        "SUBMIT ERROR:",
        err
      );
    }
  };

  /* ================= CLEAR ================= */

  const handleClear = () => {

    setForm(initialForm);

    setPreviewImage("");

    setEditId(null);
  };

  /* ================= EDIT ================= */

  const handleEdit = (post) => {

    setForm(post);

    setPreviewImage(
      post.image
        ? IMAGE_URL + post.image
        : ""
    );

    setEditId(post._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {

    try {

      await API.delete(`/news/${id}`);

      setPosts((prev) =>
        prev.filter(
          (item) => item._id !== id
        )
      );

    } catch (err) {

      console.error(
        "DELETE ERROR:",
        err
      );
    }
  };

  /* ================= STATUS ================= */

  const handleToggleStatus = async (
    id
  ) => {

    try {

      const res = await API.put(
        `/news/${id}/status`
      );

      setPosts((prev) =>
        prev.map((item) =>
          item._id === id
            ? res.data.data
            : item
        )
      );

    } catch (err) {

      console.error(
        "STATUS ERROR:",
        err
      );
    }
  };

  const sortedPosts = [...posts].sort(
    (a, b) =>
      Number(a.order) -
      Number(b.order)
  );

  return (
    <>
      <section className={base}>

        {/* ================= HEADER ================= */}

        <div className={`${base}__header`}>

          <div>

            <h2>
              News Post Management
            </h2>

            <p className={`${base}__subtext`}>
              Create, preview, and manage
              all school news posts from
              one place.
            </p>

          </div>

        </div>

        {/* ================= TOP LAYOUT ================= */}

        <div className={`${base}__topLayout`}>

          {/* ================= FORM PANEL ================= */}

          <div className={`${base}__formPanel`}>

            <div className={`${base}__panelHead`}>

              <h3>
                {editId
                  ? "Update News Post"
                  : "Create News Post"}
              </h3>

              <p>
                Fill all details and save
                the post.
              </p>

            </div>

            <form
              className={`${base}__form`}
              onSubmit={handleSubmit}
            >

              {/* ================= DATE + ORDER ================= */}

              <div className={`${base}__formRow`}>

                <div className={`${base}__formGroup`}>

                  <label>
                    News Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                  />

                </div>

                <div className={`${base}__formGroup`}>

                  <label>
                    Post Order
                  </label>

                  <input
                    type="number"
                    name="order"
                    min="1"
                    value={form.order}
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* ================= CATEGORY ================= */}

              <div className={`${base}__formGroup`}>

                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={`${base}__modernSelect`}
                >

                  <option value="">
                    Select Category
                  </option>

                  <option value="Academic">
                    Academic
                  </option>

                  <option value="Admission">
                    Admission
                  </option>

                  <option value="Sports">
                    Sports
                  </option>

                  <option value="Events">
                    Events
                  </option>

                  <option value="Holiday">
                    Holiday
                  </option>

                  <option value="Announcement">
                    Announcement
                  </option>

                </select>

              </div>

              {/* ================= TITLE ================= */}

              <div className={`${base}__formGroup`}>

                <label>
                  News Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter news title"
                />

              </div>

              {/* ================= DESCRIPTION ================= */}

              <div className={`${base}__formGroup`}>

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Write news description..."
                  className={`${base}__textarea`}
                />

              </div>

              {/* ================= STATUS ================= */}

              <div className={`${base}__formRow`}>

                <div className={`${base}__formGroup`}>

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >

                    <option value="Active">
                      Active
                    </option>

                    <option value="Inactive">
                      Inactive
                    </option>

                  </select>

                </div>

              </div>

              {/* ================= FEATURED ================= */}

              <div className={`${base}__toggleRow`}>

                <label className={`${base}__checkboxWrap`}>

                  <input
                    type="checkbox"
                    name="featured"
                    checked={form.featured}
                    onChange={handleChange}
                  />

                  <span>
                    Featured Post
                  </span>

                </label>

              </div>

              {/* ================= BUTTONS ================= */}

              <div className={`${base}__buttonRow`}>

                <button
                  type="submit"
                  className={`${base}__primaryBtn`}
                >

                  <FaPlus />

                  {editId
                    ? "Update Post"
                    : "Save Post"}

                </button>

                <button
                  type="button"
                  className={`${base}__secondaryBtn`}
                  onClick={handleClear}
                >

                  <FaTimes />

                  Clear

                </button>

              </div>

            </form>

          </div>

          {/* ================= PREVIEW PANEL ================= */}

          <div className={`${base}__previewPanel`}>

            <div className={`${base}__panelHead`}>

              <h3>
                Live Preview
              </h3>

              <p>
                Frontend news card preview
              </p>

            </div>

            <div className={`${base}__previewCard`}>

              <div className={`${base}__previewImageWrap`}>

                <img
                  src={displayPreview.image}
                  alt="News preview"
                  className={`${base}__previewImage`}
                />

                {displayPreview.featured && (

                  <span className={`${base}__featuredBadge`}>

                    <FaStar />

                    Featured

                  </span>

                )}

              </div>

              <div className={`${base}__previewContent`}>

                <div className={`${base}__previewDate`}>

                  <FaCalendarAlt />

                  <span>
                    {displayPreview.date}
                  </span>

                </div>

                <h4>
                  {displayPreview.title}
                </h4>

                <p>
                  {displayPreview.description}
                </p>

              </div>

              <div className={`${base}__previewFooter`}>

                <button type="button">

                  {displayPreview.buttonText}

                  <span>→</span>

                </button>

              </div>

            </div>

            <div className={`${base}__previewStatusWrap`}>

              <span
                className={`${base}__statusBadge} ${
                  displayPreview.status ===
                  "Active"
                    ? `${base}__statusBadge--active`
                    : `${base}__statusBadge--inactive`
                }`}
              >

                {displayPreview.status}

              </span>

            </div>

          </div>

        </div>

        {/* ================= TABLE ================= */}

        {/* ================= TABLE ================= */}

<div className={`${base}__tablePanel`}>

  <div className={`${base}__panelHead`}>

    <h3>
      Manage News Posts
    </h3>

    <p>
      Edit, preview, activate,
      or delete saved posts.
    </p>

  </div>

  <div className={`${base}__tableWrap`}>

    <table className={`${base}__table`}>

      <thead>

        <tr>

          <th>Title</th>

          <th>Category</th>

          <th>Date</th>

          <th>Description</th>

          <th>Status</th>

          <th>Featured</th>

          <th>Order</th>

          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {sortedPosts.length > 0 ? (

          sortedPosts.map((post) => (

            <tr key={post._id}>

              <td className={`${base}__tableTitle`}>

                {post.title}

              </td>

              <td>

                <span className={`${base}__categoryBadge`}>

                  {post.category || "General"}

                </span>

              </td>

              <td>

                {formatDate(post.date)}

              </td>

              <td>

                {truncateText(
                  post.description,
                  75
                )}

              </td>

              <td>

                <span
                  className={`${base}__statusBadge} ${
                    post.status === "Active"
                      ? `${base}__statusBadge--active`
                      : `${base}__statusBadge--inactive`
                  }`}
                >

                  {post.status}

                </span>

              </td>

              <td>

                {post.featured ? (

                  <span className={`${base}__featuredMini`}>

                    Yes

                  </span>

                ) : (

                  <span className={`${base}__notFeaturedMini`}>

                    No

                  </span>

                )}

              </td>

              <td>

                {post.order}

              </td>

              <td>

                <div className={`${base}__actionBtns`}>

                  <button
                    className={`${base}__iconBtn edit`}
                    onClick={() => handleEdit(post)}
                    type="button"
                  >

                    <FaEdit />

                  </button>

                  <button
                    className={`${base}__iconBtn view`}
                    onClick={() => setViewPost(post)}
                    type="button"
                  >

                    <FaEye />

                  </button>

                  <button
                    className={`${base}__iconBtn toggle`}
                    onClick={() =>
                      handleToggleStatus(post._id)
                    }
                    type="button"
                  >

                    {post.status === "Active" ? (
                      <FaToggleOn />
                    ) : (
                      <FaToggleOff />
                    )}

                  </button>

                  <button
                    className={`${base}__iconBtn delete`}
                    onClick={() =>
                      handleDelete(post._id)
                    }
                    type="button"
                  >

                    <FaTrash />

                  </button>

                </div>

              </td>

            </tr>

          ))

        ) : (

          <tr>

            <td
              colSpan="8"
              className={`${base}__emptyRow`}
            >

              No news posts added yet.

            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>
        

      </section>

      {/* ================= MODAL ================= */}

      {viewPost && (

        <div
          className={`${base}__modalOverlay`}
          onClick={() => setViewPost(null)}
        >

          <div
            className={`${base}__modal`}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className={`${base}__modalClose`}
              onClick={() => setViewPost(null)}
            >

              <FaTimes />

            </button>

            <div className={`${base}__modalImageWrap`}>

              <img
                src={IMAGE_URL + viewPost.image}
                alt={viewPost.title}
              />

            </div>

            <div className={`${base}__modalBody`}>

              <div className={`${base}__previewDate`}>

                <FaCalendarAlt />

                <span>
                  {formatDate(viewPost.date)}
                </span>

              </div>

              <h3>
                {viewPost.title}
              </h3>

              <p>
                {viewPost.description}
              </p>

              <div className={`${base}__modalMeta`}>

                <span
                  className={`${base}__statusBadge} ${
                    viewPost.status === "Active"
                      ? `${base}__statusBadge--active`
                      : `${base}__statusBadge--inactive`
                  }`}
                >

                  {viewPost.status}

                </span>

                {viewPost.featured && (

                  <span className={`${base}__featuredMini`}>

                    Featured

                  </span>

                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default NewsPosting;