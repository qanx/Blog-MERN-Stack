const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require("./routes/categories");
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
require('dotenv').config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));


//  DB
mongoose.connect(process.env.BLOG_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(console.log("DB connectd")).catch(err => {
  console.log(err)
})

app.use(morgan("common"))

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

//routers
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute);
// PORT 
const port = process.env.PORT || 3300
app.listen(port, () => {
  console.log("Server Running on : " + port)
})