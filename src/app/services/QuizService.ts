import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Quiz} from "../models/Quiz";
import {User} from "../models/User";
import {QuizQuestion} from "../models/QuizQuestion";
import {QuizAnswer} from "../models/QuizAnswer";
import {AuthentificationService} from "./auth/authentification.service";

@Injectable({
    providedIn: "root",
})
export class QuizService {
    constructor(private autService:AuthentificationService) {
    }

    private quizUrl = "quizzes"

    findAllQuizzes(): Observable<Quiz[]> {
        return this.autService.getData(this.quizUrl)
    }

    deleteQuiz(id: bigint): void {
        this.autService.deleteData(`${this.quizUrl}/${id}`)
    }

    updateQuiz(quiz:Quiz):Observable<Quiz>{
        return this.autService.postData(`${this.quizUrl}/${quiz.id}`, quiz)
    }

    addQuiz(quiz:Quiz):Observable<Quiz>{
        return this.autService.postData(this.quizUrl,quiz)
    }

    // QuizQuestions

    findAllQuizQuestions(): Observable<QuizQuestion[]> {
        return this.autService.getData(`${this.quizUrl}/questions`)
    }

    deleteQuizQuestion(id: bigint): void {
        this.autService.deleteData(`${this.quizUrl}/questions/${id}`)
    }

    updateQuizQuestion(quiz:QuizQuestion):Observable<QuizQuestion>{
        return this.autService.postData(`${this.quizUrl}/questions/${quiz.id}`, quiz)
    }

    postAnswers(quizAnswers: QuizAnswer[], quizId:number, userId:number):Observable<number>{
        return this.autService.postData(`${this.quizUrl}/score/${quizId}/${userId}`,quizAnswers)

    }

    // Quiz answer

    findAllQuizAnswersByQuizId(quizId:number): Observable<QuizAnswer[]> {
        return this.autService.getData(`${this.quizUrl}/answers/quiz/${quizId}`)
    }

    deleteQuizAnswer(id: bigint): void {
        this.autService.deleteData(`${this.quizUrl}/answers/${id}`)
    }

    updateQuizAnswer(quizAnswer:QuizAnswer):Observable<QuizAnswer>{
        return this.autService.postData(`${this.quizUrl}/answers/${quizAnswer.id}`, quizAnswer)
    }



}