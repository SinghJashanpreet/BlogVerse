const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

//https://blogverse-iy7h.onrender.com/
<<<<<<< HEAD

=======
//jashanpreet6081 username 
//and passw samedd
>>>>>>> master
dotenv.config();

app.use(
  cors({
<<<<<<< HEAD
    origin: "http://localhost:3000/",
=======
    origin: "https://singhsblogverse.netlify.app/",
>>>>>>> master
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
<<<<<<< HEAD
  .connect('mongodb://127.0.0.1:27017/NewSchema', {
=======
  // .connect('mongodb://127.0.0.1:27017/NewSchema', {
    //this is forlocal
  .connect(`mongodb+srv://jashanpreet6081:J@shanjo0@blogverse.uevgveg.mongodb.net/?retryWrites=true&w=majority`, {
>>>>>>> master
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
