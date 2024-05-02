import { Schema, model } from "mongoose";

export interface ProcessLession extends Document {
    lession_id: string;
    student_id?: string;
    type: string;
    score: number
}

const ItemSchema  = new Schema<ProcessLession> (
    {
        lession_id: {
            type: String
        },
        student_id: {
            type: String
        },
        type: {
            type: String
        },
        score: {
            type: Number
        },
    },
    {
        timestamps: true,
        versionKey:false
    }
)

export const ProcessLessionModel = model<ProcessLession>("processLessions", ItemSchema)
