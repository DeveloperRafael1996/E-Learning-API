import { Schema, model } from "mongoose";

export interface Student extends Document {
    name: string;
    first_name?: string;
    last_name: string;
}

const ItemSchema  = new Schema<Student> (
    {
        name: {
            type: String
        },
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
    },
    {
        timestamps: true,
        versionKey:false
    }
)

export const StudentModel = model<Student>("students", ItemSchema)
