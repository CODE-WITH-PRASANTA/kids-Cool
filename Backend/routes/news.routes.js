const express = require("express");

const router = express.Router();

const {
  createNews,
  getNews,
  updateNews,
  deleteNews,
  toggleStatus,
} = require("../controllers/news.controller");

/* ================= CREATE + GET ================= */

router
  .route("/")
  .post(createNews)
  .get(getNews);

/* ================= UPDATE + DELETE ================= */

router
  .route("/:id")
  .put(updateNews)
  .delete(deleteNews);

/* ================= STATUS ================= */

router.put("/:id/status", toggleStatus);

module.exports = router;