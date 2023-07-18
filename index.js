
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
  .connect("mongodb+srv://mabdullah2037:bustop123@todo-app.b5uowbs.mongodb.net/")
  .then(() => {
    app.listen(5000, () => {
      console.log(
        `Database Connected Successfully and server is listening on this port 5000`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });