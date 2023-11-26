import {QuizQuestion} from "./QuizQuestion";

export interface QuizAnswer {
    id?: bigint,
    quizQuestion: QuizQuestion,
    isTrue: boolean,
    answer : string
}
