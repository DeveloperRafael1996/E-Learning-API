import { Schema, model } from "mongoose";

export interface Course extends Document {
    name: string;
    description: string;
    previous_course_id?: string;
}

const ItemSchema  = new Schema<Course> (
    {
        name: {
            type: String
        },
        description: {
            type: String
        },
        previous_course_id: {
            type: String
        },
    },
    {
        timestamps: true,
        versionKey:false
    }
)

export const CourceModel = model<Course>("courses", ItemSchema)
