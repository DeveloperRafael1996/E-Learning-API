
import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { QuestionModel } from '../models/answer';

const postAnswer = async (req: Request, res: Response) => {
    
    try {
        const { text, type, lession_id, answers } = req.body;

        const newAnswer = new QuestionModel({
            text,
            type,
            lession_id,
            answers
        });

        const savedAnswer = await newAnswer.save();
        return res.status(200).json({ data: savedAnswer });

    } catch (e) {
        handleHttp(res, 'ERROR_POST_ANSWER')
    }
}

export { postAnswer }