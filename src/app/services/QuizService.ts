import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Quiz} from "../models/Quiz";
import {QuizQuestion} from "../models/QuizQuestion";
import {QuizAnswer} from "../models/QuizAnswer";
import {AuthentificationService} from "./auth/authentification.service";
import {QuizUser} from "../models/QuizUser";

@Injectable({
    providedIn: "root",
})
export class QuizService {
    constructor(private authService:AuthentificationService) {
    }

    private quizUrl = "quizzes"

    findAllQuizzes(): Observable<Quiz[]> {
        return this.authService.getData(this.quizUrl)
    }

    getAllQuizzesByUserId(userId: number): Observable<Quiz[]> {
        return this.authService.getData(this.quizUrl + `/user`)
    }

    getAllQuizByUserId(userId: number): Observable<Quiz[]> {
        return this.authService.getData(this.quizUrl + `/user/${userId}`)
    }

    deleteQuiz(id: bigint): Observable<Object> {
        return this.authService.deleteData(`${this.quizUrl}/${id}`)
    }

    updateQuiz(quiz:Quiz):Observable<Quiz>{
        return this.authService.postData(`${this.quizUrl}/${quiz.id}`, quiz)
    }

    addQuiz(quiz:Quiz):Observable<Quiz>{
        return this.authService.postData(this.quizUrl,quiz)
    }

    // QuizQuestions

    findAllQuizQuestions(): Observable<QuizQuestion[]> {
        return this.authService.getData(`${this.quizUrl}/questions`)
    }

    deleteQuizQuestion(id: bigint): void {
        this.authService.deleteData(`${this.quizUrl}/questions/${id}`)
    }

    updateQuizQuestion(quiz:QuizQuestion):Observable<QuizQuestion>{
        return this.authService.postData(`${this.quizUrl}/questions/${quiz.id}`, quiz)
    }

    // Quiz answer

    findAllQuizAnswers(): Observable<QuizAnswer[]> {
        return this.authService.getData(`${this.quizUrl}/answers`)
    }

    deleteQuizAnswer(id: bigint): void {
        this.authService.deleteData(`${this.quizUrl}/answers/${id}`)
    }

    updateQuizAnswer(quizAnswer:QuizAnswer):Observable<QuizAnswer>{
        return this.authService.postData(`${this.quizUrl}/answers/${quizAnswer.id}`, quizAnswer)
    }

    addQuizAnswer(quizAnswer:QuizAnswer):Observable<QuizAnswer>{
        return this.authService.postData(`${this.quizUrl}/answers`, quizAnswer)
    }

    addQuizQuestion(quizQuestion:QuizQuestion):Observable<QuizQuestion>{
        return this.authService.postData(`${this.quizUrl}/questions`, quizQuestion)
    }



}