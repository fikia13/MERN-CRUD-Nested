import mongoose from "mongoose";
const {Schema} = mongoose

const Answer = mongoose.Schema({
    questionId: { 
        type: Schema.Types.ObjectId, 
        ref: 'questions',
        required: true
    },
    name:{
        type: String,
        required : true
    }
});

export default mongoose.model('Answers', Answer);