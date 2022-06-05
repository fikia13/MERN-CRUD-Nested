import Answer from "../models/AnswerModel.js"

export const getAnswers= async (req, res) => {
    try{
        const datas = await Answer.find({questionId: req.params.id});
        res.json(datas);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const getAnswerById = async (req, res) => {
    try{
        const data = await Answer.findById(req.params.id);
        res.json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}


export const saveAnswer = async (req, res) => {
    const data = new Answer(req.body);
    try{
        const insertData = await data.save();
        res.status(201).json(insertData);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}

export const updateAnswer = async (req, res) => {
    try{
        const updatedData = await Answer.updateOne({_id : req.params.id}, {$set: req.body});
        res.status(200).json(updatedData);
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

export const deleteAnswer = async (req, res) => {
    try{
        const deletedData = await Answer.deleteOne({_id:req.params.id});
        res.status(200).json(deletedData);
    } catch(error){
        res.status(400).json({message : error.message})
    }
}