export interface Lesson{
    name:string
    description:string
    previous_lesson_id: string
    course_id: string
}

interface Answer {
    text: string;
    response: boolean;
}

export interface LessonResponse {
    text: string;
    answers: Answer[];
}

export interface Question {
    _id: string; 
    text: string;
    type: 'multiple' | 'single';
    lession_id: string;
    answers: Answer[];
    createdAt: Date;
    updatedAt: Date;
    score: number;
}