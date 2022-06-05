import mongoose from "mongoose";
const {Schema} = mongoose

const Topic = mongoose.Schema({
    courseId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Courses',
        required: true
    },
    name:{
        type: String,
        required : true
    }
});

export default mongoose.model('Topics', Topic);