import {User} from "./User";
import {Quiz} from "./Quiz";

export interface QuizQuestion {
    id?: bigint
    question: string,
    quiz: Quiz
    questionType: number
    questionValue: number
}
