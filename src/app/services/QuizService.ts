import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Quiz} from "../models/Quiz";

@Injectable({
    providedIn: "root",
})
export class QuizService {
    constructor(private http: HttpClient) {
    }

    private userUrl = "http://localhost:8080/quizzes"


    findAllQuizzes(): Observable<Quiz[]> {
        return this.http.get<Quiz[]>(this.userUrl)
    }

    deleteQuiz(id: bigint): void {
        this.http.delete(`${this.userUrl}/${id}`)
    }
}