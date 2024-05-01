import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { CourceModel } from '../models/course';
import mongoose from 'mongoose';


const getCourses = async (req: Request, res: Response) => {
    try {
        const response = await CourceModel.find();
        return res.status(200).json({ data: response });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_COURSE')
    }
}

const getCourse = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
    
}

const updateCourse= async (req: Request, res: Response) => {
    try {
        const { id, name, description, previousCourseId } = req.body;
        const course = await CourceModel.findById(id);

        if (!course) {
            return res.status(200).json({ data: { error: 'El curso no existe' }});
        }

        if (previousCourseId && course.previous_course_id !== previousCourseId) {
            const previous_course_id = previousCourseId

           const newPreviousCourse = await CourceModel.findOne({previous_course_id});
           if (!newPreviousCourse) {
               return res.status(200).json({ data: { error: 'El nuevo curso anterior no existe' }});
           }
       }

       course.name = name;
       course.description = description;
       course.previous_course_id = previousCourseId;
       const updatedCourse = await course.save();
       return res.status(200).json({ data: updatedCourse });

    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_COURSE')
    }
}

const postCourse = async (req: Request, res: Response) => {
    
    try {
        const { name, description, previousCourseId } = req.body;

        if (!previousCourseId) {
            const newCourse = new CourceModel({ name, description });
            const savedLesson = await newCourse.save();
            return res.status(201).json({ data: savedLesson });
        }

        const previous_course_id = new mongoose.Types.ObjectId(previousCourseId);

        const previousCourseResponse = await CourceModel.findOne({_id: previous_course_id}).lean();
        
        if (!previousCourseResponse) {
            return res.status(200).json({ data: { error: 'El curso anterior no existe' }});
        }
        
        const newCourse = new CourceModel({
            name,
            description,
            previous_course_id: previousCourseId
        });

        const savedCourse = await newCourse.save();
        return res.status(200).json({ data: savedCourse });

    } catch (e) {
        console.log(e)
        handleHttp(res, 'ERROR_POST_COURSE')
    }
}

const deleteCourse = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_COURSE')
    }
}


export { getCourse, getCourses, postCourse, updateCourse, deleteCourse}