const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/* ================= CREATE UPLOAD FOLDER ================= */

const uploadDir = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}

/* ================= MULTER STORAGE ================= */

const storage = multer.memoryStorage();

/* ================= FILE FILTER ================= */

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "application/pdf",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, PNG, WEBP and PDF files are allowed"
      ),
      false
    );
  }
};

/* ================= MULTER CONFIG ================= */

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },

  fileFilter,
});

/* ================= PROCESS FILE ================= */

const processFile = async (file) => {

  // IMAGE FILE
  if (file.mimetype.startsWith("image/")) {

    const filename = `${uuidv4()}.webp`;

    const filepath = path.join(
      uploadDir,
      filename
    );

    await sharp(file.buffer)
      .resize(1200, 1200, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
      })
      .toFile(filepath);

    file.filename = filename;

    file.path = `/uploads/${filename}`;

    return;
  }

  // PDF FILE
  const ext = path.extname(
    file.originalname
  );

  const filename = `${uuidv4()}${ext}`;

  const filepath = path.join(
    uploadDir,
    filename
  );

  fs.writeFileSync(
    filepath,
    file.buffer
  );

  file.filename = filename;

  file.path = `/uploads/${filename}`;
};

/* ================= CONVERT TO WEBP ================= */

const convertToWebp = async (
  req,
  res,
  next
) => {

  try {

    // SINGLE FILE
    if (req.file) {
      await processFile(req.file);
    }

    // MULTIPLE FILES
    if (req.files) {

      for (const fieldName in req.files) {

        for (const file of req.files[fieldName]) {

          await processFile(file);
        }
      }
    }

    next();

  } catch (error) {

    console.error(
      "Image Processing Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "File upload failed",
    });
  }
};

/* ================= DELETE FILE ================= */

const deleteImageFile = (
  filePath
) => {

  try {

    if (!filePath) return;

    const fullPath = path.join(
      __dirname,
      "..",
      filePath
    );

    if (
      fs.existsSync(fullPath)
    ) {

      fs.unlinkSync(fullPath);

      console.log(
        "Deleted:",
        fullPath
      );
    }

  } catch (error) {

    console.error(
      "Delete File Error:",
      error
    );
  }
};

module.exports = {
  upload,
  convertToWebp,
  deleteImageFile,
};