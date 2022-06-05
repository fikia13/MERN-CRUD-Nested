import Question from "../models/QuestionModel.js"

export const getQues= async (req, res) => {
    try{
        const datas = await Question.find({quisId: req.params.id});
        res.json(datas);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const getQuesById = async (req, res) => {
    try{
        const data = await Question.findById(req.params.id);
        res.json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}


export const saveQues = async (req, res) => {
    const data = new Question(req.body);
    try{
        const insertData = await data.save();
        res.status(201).json(insertData);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}

export const updateQues = async (req, res) => {
    try{
        const updatedData = await Question.updateOne({_id : req.params.id}, {$set: req.body});
        res.status(200).json(updatedData);
    } catch(error){
        req.status(400).json({message: error.message})
    }
}

export const deleteQues = async (req, res) => {
    try{
        const deletedData = await Question.deleteOne({_id:req.params.id});
        res.status(200).json(deletedData);
    } catch(error){
        res.status(400).json({message : error.message})
    }
}