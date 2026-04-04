// ================= IMPORTS =================
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const galleryRoutes = require("./routes/gallery.routes");
const coldLeadRoutes = require("./routes/coldLeadRoutes");

// ================= CONFIG =================
dotenv.config();

// ================= DB CONNECTION =================
connectDB();

// ================= INIT APP =================
const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= STATIC FOLDER =================
app.use("/uploads", express.static("uploads"));

// ================= ROOT ROUTE =================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running Successfully...",
  });
});

// ================= API ROUTES =================
app.use("/api/gallery", galleryRoutes);
app.use("/api/cold-leads", coldLeadRoutes);

// ================= 404 HANDLER =================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ================= ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});