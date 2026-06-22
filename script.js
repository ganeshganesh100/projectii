// Import required core and third-party modules



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
