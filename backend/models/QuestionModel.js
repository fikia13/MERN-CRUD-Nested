import mongoose from "mongoose";
const {Schema} = mongoose

const Question = mongoose.Schema({
    quisId: { 
        type: Schema.Types.ObjectId, 
        ref: 'quis',
        required: true
    },
    name:{
        type: String,
        required : true
    }
});

export default mongoose.model('Questions', Question);