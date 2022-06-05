import Course from "../models/CourseModel.js";

export const getCourse= async (req, res) => {
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const getCourseById = async (req, res) => {
    try{
        const courses = await Course.findById(req.params.id);
        res.json(courses);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const saveCourse = async (req, res) => {
    const course = new Course(req.body)
    try{
        const insertCourse = await course.save();
        res.status(201).json(insertCourse);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}

export const updateCourse = async (req, res) => {
    try{
        const updatedcourse = await Course.updateOne({_id : req.params.id}, {$set: req.body});
        res.status(200).json(updatedcourse);
    } catch(error){
        req.status(400).json({message: error.message})
    }
}

export const deleteCourse = async (req, res) => {
    try{
        const deletedcourse = await Course.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcourse);
    } catch(error){
        res.status(400).status(400).json({message : error.message})
    }
}