const express = require("express");
const router = express.Router();

const {
  createNews,
  getNews,
  updateNews,
  deleteNews,
  toggleStatus,
} = require("../controllers/news.controller");

router.route("/")
  .post(createNews)
  .get(getNews);

router.route("/:id")
  .put(updateNews)
  .delete(deleteNews);

router.put("/:id/status", toggleStatus);

module.exports = router;