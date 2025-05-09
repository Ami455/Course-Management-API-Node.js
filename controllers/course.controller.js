const Course = require("../models/course.model");
const {inputSchema,updateSchema} = require("../validator/course.validator");

const findAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });

    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

const findOneCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({message:"Course not found"});
        }
        res.status(200).json({ course });

    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

const addCourse = async (req, res) => {
    try {
        console.log(req.body)
        const { error, value } = inputSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const isExist = await Course.findOne({ title: value.title });
        if (isExist) {
            return res.status(400).json({ message: "There is a course with the same title" });
        }

        const course = await Course.create(value);
        res.status(201).json({ data: course });

    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        const { error, value } = updateSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const updatedCourse = await Course.findByIdAndUpdate(courseId, value, { new: true });
        if(!updatedCourse){
            return res.status(404).json({message:"Course not found"});
        }
        res.status(200).json({
            data: updatedCourse,
            message: "Course updated"
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findByIdAndDelete(courseId);
        if(!course){
            return res.status(404).json({message:"Course not found"});
        }
        res.status(204).send();

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    findAllCourses,
    findOneCourse,
    addCourse,
    updateCourse,
    deleteCourse
};