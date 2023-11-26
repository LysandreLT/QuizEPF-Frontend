import {Quiz} from "./Quiz";

export interface QuizQuestion {
    id?: bigint
    question: string,
    quiz: Quiz
    questionType: string
    questionValue: number
}
