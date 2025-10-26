
import cors from "cors";
import mongoose from "mongoose";

// ---------------------------
// 1️⃣ Initialize Express App
// ---------------------------
const app = express();
const PORT = process.env.PORT || 5000;

// ---------------------------
// 2️⃣ Middleware
// ---------------------------
app.use(cors({
  origin: "*", // allow all origins (for Render frontend)
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// ---------------------------
// 3️⃣ MongoDB Connection (Optional – if you use a database)
// ---------------------------
// Example: Add your MongoDB connection string from Render or Mongo Atlas
// Replace below line with your actual connection string
/*
mongoose.connect("YOUR_MONGODB_CONNECTION_URL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));
*/

// ---------------------------
// 4️⃣ Example Product Schema (if using MongoDB)
// ---------------------------
/*
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);
*/

// ---------------------------
// 5️⃣ Routes
// ---------------------------

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running fine ✅");
});

// ✅ Example products API (static or database)
app.get("/products", async (req, res) => {
  try {
    // --- If using MongoDB ---
    // const products = await Product.find();

    // --- If static (for testing) ---
    const products = [
      { id: 1, name: "Test Product 1", price: 100 },
      { id: 2, name: "Test Product 2", price: 200 },
    ];

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// ---------------------------
// 6️⃣ Start Server
// ---------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
