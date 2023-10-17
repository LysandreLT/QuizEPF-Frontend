import {User} from "./User";
import {Quiz} from "./Quiz";

export interface QuizQuestion {
    id?: bigint
    question: String,
    quiz: Quiz
    questionType: number
    questionValue: number
}
