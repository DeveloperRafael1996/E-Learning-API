
import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { QuestionModel } from '../models/answer';


const getAnswerByLessionId= async (req: Request, res: Response) => {
    try {
        const lession_id = req.params.lession_id;
        const response = await QuestionModel.find({lession_id});
        return res.status(200).json({ data: response });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_getAnswerByLessionId')
    }
} 

const postAnswer = async (req: Request, res: Response) => {
    
    try {
        const { text, type, lession_id, score , answers } = req.body;

        const newAnswer = new QuestionModel({
            text,
            type,
            lession_id,
            score,
            answers
        });

        const savedAnswer = await newAnswer.save();
        return res.status(200).json({ data: savedAnswer });

    } catch (e) {
        handleHttp(res, 'ERROR_POST_ANSWER')
    }
}

export { postAnswer, getAnswerByLessionId }