import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Quiz} from "../models/Quiz";
import {User} from "../models/User";
import {QuizQuestion} from "../models/QuizQuestion";
import {QuizAnswer} from "../models/QuizAnswer";

@Injectable({
    providedIn: "root",
})
export class QuizService {
    constructor(private http: HttpClient) {
    }

    private quizUrl = "http://localhost:8080/quizzes"


    findAllQuizzes(): Observable<Quiz[]> {
        return this.http.get<Quiz[]>(this.quizUrl)
    }

    deleteQuiz(id: bigint): void {
        this.http.delete(`${this.quizUrl}/${id}`)
    }

    updateQuiz(quiz:Quiz):Observable<Quiz>{
        return this.http.post<Quiz>(`${this.quizUrl}/${quiz.id}`, quiz)
    }

    // QuizQuestions

    findAllQuizQuestions(): Observable<QuizQuestion[]> {
        return this.http.get<QuizQuestion[]>(`${this.quizUrl}/questions`)
    }

    deleteQuizQuestion(id: bigint): void {
        this.http.delete(`${this.quizUrl}/questions/${id}`)
    }

    updateQuizQuestion(quiz:QuizQuestion):Observable<QuizQuestion>{
        return this.http.post<QuizQuestion>(`${this.quizUrl}/questions/${quiz.id}`, quiz)
    }

    // Quiz answer

    findAllQuizAnswers(): Observable<QuizAnswer[]> {
        return this.http.get<QuizAnswer[]>(`${this.quizUrl}/answers`)
    }

    deleteQuizAnswer(id: bigint): void {
        this.http.delete(`${this.quizUrl}/answers/${id}`)
    }

    updateQuizAnswer(quizAnswer:QuizAnswer):Observable<QuizAnswer>{
        return this.http.post<QuizAnswer>(`${this.quizUrl}/answers/${quizAnswer.id}`, quizAnswer)
    }



}