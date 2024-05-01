import { Schema, model } from "mongoose";

export interface Lesson extends Document {
    name: string;
    description: string;
    previous_lesson_id?: string;
    course_id: string;
}

const ItemSchema  = new Schema<Lesson> (
    {
        name: {
            type: String
        },
        description: {
            type: String
        },
        previous_lesson_id: {
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

export const LessonModel = model<Lesson>("lessons", ItemSchema)
