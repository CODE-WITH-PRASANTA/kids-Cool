// ================= IMPORTS =================
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db"); 
const galleryRoutes = require("./routes/gallery.routes");


// ================= INIT APP =================
const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= ROUTES =================
app.get("/", (req, res) => {
  res.send("🚀 API Running Successfully...");
});

// Example:
// const attendanceRoutes = require("./routes/attendance.routes");
// app.use("/api/attendance", attendanceRoutes);

// ================= ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});



// STATIC (IMPORTANT 🔥)
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/gallery", galleryRoutes);


// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});