import {User} from "./User";
import {Quiz} from "./Quiz";


export interface QuizQuestion {
    id?: number
    question: String,
    quiz: Quiz
    questionType: number
    questionValue: number
}
