import {User} from "./User";
import {Quiz} from "./Quiz";

export interface QuizUser {
    id?: bigint,
    user: User,
    quiz: Quiz,
    score: BigInt
}
