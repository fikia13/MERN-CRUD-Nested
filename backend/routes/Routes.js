import express, { Router } from "express";

import {
    getCourse,
    getCourseById,
    saveCourse,
    updateCourse,
    deleteCourse
} from "../controllers/CourseController.js";

import {
    getTopics,
    saveTopic,
    getTopicById,
    updateTopic,
    deleteTopic
} from "../controllers/TopicController.js"

import {
    getQuis,
    getQuisById,
    saveQuis,
    updateQuis,
    deleteQuis
} from "../controllers/QuisController.js"

import {
    getQues,
    getQuesById,
    updateQues,
    saveQues,
    deleteQues
} from "../controllers/QuestionController.js"

import {
    getAnswers,
    getAnswerById,
    saveAnswer,
    updateAnswer,
    deleteAnswer
} from "../controllers/AnswerController.js"

const router = express.Router();

router.get('/course', getCourse)
router.get('/course/:id', getCourseById)
router.post('/course', saveCourse)
router.patch('/course/:id', updateCourse)
router.delete('/course/:id', deleteCourse)

router.get('/topics/:id', getTopics)
router.post('/topic', saveTopic)
router.get('/topic/:id', getTopicById)
router.patch('/topic/:id', updateTopic)
router.delete('/topic/:id', deleteTopic)

router.get('/quises/:id', getQuis)
router.post('/quis', saveQuis)
router.get('/quis/:id', getQuisById)
router.patch('/quis/:id', updateQuis)
router.delete('/quis/:id', deleteQuis)

router.get('/questions/:id', getQues)
router.post('/question', saveQues)
router.get('/question/:id', getQuesById)
router.patch('/question/:id', updateQues)
router.delete('/question/:id', deleteQues)

router.get('/answers/:id', getAnswers)
router.post('/answer', saveAnswer)
router.get('/answer/:id', getAnswerById)
router.patch('/answer/:id', updateAnswer)
router.delete('/answer/:id', deleteAnswer)


export default router;