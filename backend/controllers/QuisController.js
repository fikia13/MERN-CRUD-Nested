import Quis from "../models/QuisModel.js"

export const getQuis= async (req, res) => {
    try{
        const datas = await Quis.find({topicId: req.params.id});
        res.json(datas);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const getQuisById = async (req, res) => {
    try{
        const data = await Quis.findById(req.params.id);
        res.json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}


export const saveQuis = async (req, res) => {
    const data = new Quis(req.body)
    try{
        const insertData = await data.save();
        res.status(201).json(insertData);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}

export const updateQuis = async (req, res) => {
    try{
        const updatedData = await Quis.updateOne({_id : req.params.id}, {$set: req.body});
        res.status(200).json(updatedData);
    } catch(error){
        req.status(400).json({message: error.message})
    }
}

export const deleteQuis = async (req, res) => {
    try{
        const deletedData = await Quis.deleteOne({_id:req.params.id});
        res.status(200).json(deletedData);
    } catch(error){
        res.status(400).json({message : error.message})
    }
}