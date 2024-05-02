
import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { QuestionModel } from '../models/answer';
import { LessonResponse, Question } from '../interfaces/lesson.interface';
import { ProcessLessionModel } from '../models/processLession';



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


const postAnswerByStudent = async (req: Request, res: Response) => {
    
    try {
        const { lession_id, student_id, type, lessions }: {
            lession_id: string;
            student_id: string;
            type: string;
            lessions: LessonResponse[];
        } = req.body;
        
        
        const responseAPI = await QuestionModel.find({lession_id}).lean();
        let score = 0;

        lessions.forEach(pregSend => {
            const answerAPI = responseAPI.find(preg => preg.text === pregSend.text);

            if(answerAPI){
                const rptCorrect = answerAPI.answers.filter(rpt => rpt.correct);
                const rptSendCoorect = pregSend.answers.filter(rptSend => rptSend.response);

                if (rptCorrect.length >= 1 && rptSendCoorect.length >= 1) {
                    const rptCoindice = rptCorrect.filter(respuestaCorrecta =>
                        rptSendCoorect.some(respuestaEnviada =>
                            String(respuestaCorrecta.text) === respuestaEnviada.text
                        )
                    );
                    if (rptCoindice.length >= 1) {
                        score += answerAPI.score;
                    }
                }
            }
        });

        const newScore = new ProcessLessionModel({
            lession_id,
            student_id,
            type,
            score,
        });

        const scoreSave = await newScore.save();
        return res.status(200).json({ data: scoreSave });

    } catch (e) {
        handleHttp(res, 'ERROR_POST_PostAnswerByStudent')
    }
}

export { postAnswer, getAnswerByLessionId, postAnswerByStudent }