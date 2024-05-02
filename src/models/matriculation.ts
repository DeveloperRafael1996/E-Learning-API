import { Schema, model } from "mongoose";

export interface Matriculation extends Document {
    student_id: string;
    course_id?: string;
}

const ItemSchema  = new Schema<Matriculation> (
    {
        student_id: {
            type: String
        },
        course_id: {
            type: String
        },
    },
    {
        timestamps: true,
        versionKey:false
    }
)

export const MatriculationModel = model<Matriculation>("matriculations", ItemSchema)