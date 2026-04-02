const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// TEMP STORAGE
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// CONVERT TO WEBP
const convertToWebp = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const uploadDir = "uploads";

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const filename = `${uuidv4()}.webp`;
    const filepath = path.join(uploadDir, filename);

    await sharp(req.file.buffer)
      .webp({ quality: 80 })
      .toFile(filepath);

    req.file.filename = filename;

    next();
  } catch (error) {
    console.error("Image Processing Error:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
};

module.exports = { upload, convertToWebp };