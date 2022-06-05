import Topic from "../models/TopicModel.js"

export const getTopics= async (req, res) => {
    try{
        const datas = await Topic.find({courseId: req.params.id});
        res.json(datas);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const getTopicById = async (req, res) => {
    try{
        const data = await Topic.findById(req.params.id);
        res.json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}


export const saveTopic = async (req, res) => {
    const data = new Topic(req.body)
    try{
        const insertData = await data.save();
        res.status(201).json(insertData);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}

export const updateTopic = async (req, res) => {
    try{
        const updatedData = await Topic.updateOne({_id : req.params.id}, {$set: req.body});
        res.status(200).json(updatedData);
    } catch(error){
        req.status(400).json({message: error.message})
    }
}

export const deleteTopic = async (req, res) => {
    try{
        const deletedData = await Topic.deleteOne({_id:req.params.id});
        res.status(200).json(deletedData);
    } catch(error){
        res.status(400).status(400).json({message : error.message})
    }
}