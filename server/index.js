// npm i cors express nodemon mongoose
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");
//import routes
const carRoutes = require("./routes/carRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const bookRoutes = require("./routes/bookRoutes.js");
const { METHODS } = require("http");
//db connection
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:test123@cluster0.jehb9ap.mongodb.net/carRentalApp"
    );
    console.log("mongodb connected");
  } catch (err) {
    console.log("error in connection");
    console.log(err);
  }
};

app.use(
  cors({
    origin: "https://car-booking-system-zeta.vercel.app",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.use(express.json());
app.use(
  "/uploads",
  express.static(path.join(__dirname, "middlewares/uploads"))
);
app.use("/cars", carRoutes);
app.use("/users", userRoutes);
app.use("/bookings", bookRoutes);

app.listen(4000, () => {
  connect();
  console.log("server running on port 4000");
});
