import { Schema, model } from "mongoose";

export interface ProcessLessionAproved extends Document {
    lession_id: string;
    student_id?: string;
    score: number
}

const ItemSchema  = new Schema<ProcessLessionAproved> (
    {
        lession_id: {
            type: String
        },
        student_id: {
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

export const ProcessLessionAprovedModel = model<ProcessLessionAproved>("processLessionAproveds", ItemSchema)
                                                                                                                                                                       