import mongoose from "mongoose";
const {Schema} = mongoose

const Quis = mongoose.Schema({
    topicId: { 
        type: Schema.Types.ObjectId, 
        ref: 'topics',
        required: true
    },
    name:{
        type: String,
        required : true
    }
});

export default mongoose.model('Quis', Quis);