import mongoose from "mongoose";

const Course = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    teacher:{
        type: String,
        required : true
    }
});

export default mongoose.model('Courses', Course);