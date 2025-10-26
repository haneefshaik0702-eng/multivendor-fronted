import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route for your frontend
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully 🎉" });
});

// (Optional) Root route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
