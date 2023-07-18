
// imports
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/course");
var cors = require('cors')
require("dotenv").config();

//express app
const app = express();

//cors for production
app.use(cors()) 

//middleware
app.use(express.json());

// routes
app.use("/course" , courseRoutes);




app.get("/", (req, res) => {
  res.send("Server Started");
});

// connect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Database Connected Successfully and server is listening on this port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });