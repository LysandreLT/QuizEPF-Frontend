import {User} from "./User";
import {Quiz} from "./Quiz";

export interface QuizUser {
    id?: number,
    user: User,
    quiz: Quiz,
    score: number
}
