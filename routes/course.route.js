const {
    findAllCourses,
    findOneCourse,
    addCourse,
    updateCourse,
    deleteCourse } = require("../controllers/course.controller");

const router = require("express").Router();

router.get("/", findAllCourses);
router.get("/:id", findOneCourse);
router.post("/", addCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);


module.exports = router;