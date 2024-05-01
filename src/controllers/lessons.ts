import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { LessonModel } from '../models/lesson';
import mongoose from 'mongoose';



const getLessons= async (req: Request, res: Response) => {
    try {
        const response = await LessonModel.find();
        return res.status(200).json({ data: response });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_LESSON')
    }
} 

const getLesson= (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_LESSON')
    }
    
}

const updateLessons= async (req: Request, res: Response) => {
    try {
        const { id, name, description, previousLessonId, course_id } = req.body;
        const lesson = await LessonModel.findById(id);
        
        if (!lesson) {
            return res.status(200).json({ data: { error: 'La lección no existe' }});
        }

        if (previousLessonId && lesson.previous_lesson_id !== previousLessonId) {
             const previous_lesson_id = previousLessonId

            const newPreviousLesson = await LessonModel.findOne({previous_lesson_id});
            if (!newPreviousLesson) {
                return res.status(200).json({ data: { error: 'La nueva lección anterior no existe' }});
            }
        }

        lesson.name = name;
        lesson.description = description;
        lesson.previous_lesson_id = previousLessonId;
        lesson.course_id = course_id;
        const updatedLesson = await lesson.save();
        return res.status(200).json({ data: updatedLesson });

    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_LESSON')
    }
}

const postLessons= async (req: Request, res: Response) => {
    
    try {

        const { name, description, previousLessonId, course_id } = req.body;

        if (!previousLessonId) {
            const newLesson = new LessonModel({ name, description, course_id });
            const savedLesson = await newLesson.save();
            return res.status(201).json({ data: savedLesson });
        }

        const previous_lesson_id = new mongoose.Types.ObjectId(previousLessonId);
        const previousLessonResponse = await LessonModel.findOne({_id:previous_lesson_id}).lean();


        if (!previousLessonResponse) {
            return res.status(200).json({ data: { error: 'La lección anterior no existe' }});
        }

        const newLesson = new LessonModel({ name, description,previous_lesson_id: previousLessonId, course_id });
        const savedLesson = await newLesson.save();
        return res.status(201).json({ data: savedLesson });


    } catch (e) {
        handleHttp(res, 'ERROR_POST_LESSON')
    }
}

const deleteLessons= (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_LESSON')
    }
}


export { getLesson, getLessons, postLessons, updateLessons, deleteLessons}