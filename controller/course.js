const Course = require("../models/course");
const mongoose = require("mongoose");

// post request of add Courses

const addCourse = async (req, res) => {
  const {
    name,
    duration,
    fees,
    shortName,
  } = req.body;
  const course = await Course.create({
    name,
    duration,
    fees,
    shortName,
  });
  res.json({ mssg: "course added successfully" });
};

//Get request of all Courses

const getCourse = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

//Get reCourset of single Courses
const getOneCourse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No such course" });
  }
  const courses = await Course.findById(id);
  res.json(courses);
};

// delete Course

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No such Course" });
  }

  const Courses = await Course.findOneAndDelete({ _id: id });

  if (!Courses) {
    return res.json({ error: "No such Course" });
  }

  res.json(Courses);
};

 // update Course

const updateCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No such Course" });
  }

  const Courses = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!Courses) {
    return res.json({ error: "No such Course" });
  }

  res.json(Courses);
};

module.exports = {
  getOneCourse,
  getCourse,
  addCourse,
  deleteCourse,
  updateCourse

};
