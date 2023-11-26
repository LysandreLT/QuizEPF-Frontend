import {QuizQuestion} from "./QuizQuestion";

export interface QuizAnswer {
    id?: number,
    quizQuestion: QuizQuestion,
    isTrue: boolean,
    answer : string
}
