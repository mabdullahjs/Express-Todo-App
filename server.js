require("dotenv").config();

// imports
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/course");

//express app
const app = express();

//cors for production
var cors = require('cors')
app.use(cors()) 

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


// routes
app.use("/course" , courseRoutes);






// connect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Database Connected Successfully and server is listening on this port 5000"
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });