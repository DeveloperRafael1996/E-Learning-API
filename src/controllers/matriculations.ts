
import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { MatriculationModel } from '../models/matriculation';

const postMatriculation = async (req: Request, res: Response) => {
    
    try {
        const { course_id, student_id  } = req.body;

        const course = await MatriculationModel.findOne({course_id, student_id})
        if(course){
            return res.status(200).json({ data: { error: 'Curso ya esta Matriculado' }});
        }

        const newStudent = new MatriculationModel({
            course_id,
            student_id,
        });

        const savedStudent = await newStudent.save();
        return res.status(200).json({ data: savedStudent });

    } catch (e) {
        handleHttp(res, 'ERROR_POST_MATRICULATION')
    }
}

export { postMatriculation }