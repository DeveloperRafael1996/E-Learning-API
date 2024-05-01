import { Schema, model } from "mongoose";

export interface Answer extends Document {
    text: string;
    type: string;
    lession_id?: string;
    score: number;
    answers: [{
       text: { type: String, required: true },
       correct: { type: Boolean, required: true }
    }]
}

const ItemSchema  = new Schema<Answer> (
    {
        text: {
            type: String
        },
        type: {
            type: String
        },
        lession_id: {
            type: String
        },
        score: {
            type: Number
        },
        answers: [{
            text: { type: String, required: true },
            correct: { type: Boolean, required: true }
         }]
    },
    {
        timestamps: true,
        versionKey:false
    }
)

export const QuestionModel = model<Answer>('questions', ItemSchema);

