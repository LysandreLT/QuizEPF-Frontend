import {Quiz} from "./Quiz";


export interface QuizQuestion {
    id?: number
    question: String,
    quiz: Quiz
    questionType: string
    questionValue: number
}
