
import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { StudentModel } from '../models/student';

const postStudent = async (req: Request, res: Response) => {
    
    try {
        const { name, first_name, last_name } = req.body;

        const newStudent = new StudentModel({
            name,
            first_name,
            last_name,
        });

        const savedStudent = await newStudent.save();
        return res.status(200).json({ data: savedStudent });

    } catch (e) {
        handleHttp(res, 'ERROR_POST_STUDENT')
    }
}

export { postStudent }