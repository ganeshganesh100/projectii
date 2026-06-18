// Import required core and third-party modules

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// Load environment variables from the .env file into process.env



dotenv.config();
// Connect to the database (e.g., MongoDB) using the configuration function
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/videos", require("./routes/videoRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});


dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
