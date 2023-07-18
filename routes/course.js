const express = require('express');
const { addCourse, getOneCourse, getCourse, deleteCourse, updateCourse } = require('../controller/course');

//route
const router = express.Router();

//addCourse route
router.post('/', addCourse);

//getAllCourse route
router.get('/', getCourse);

// get single Coursetion
router.get("/:id", getOneCourse);

// delete Course
router.delete("/:id", deleteCourse);

// update  Course
router.put("/:id", updateCourse);



module.exports = router