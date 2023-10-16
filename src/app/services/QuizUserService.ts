import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {User} from "../models/User";
import {QuizUser} from "../models/QuizUser";

@Injectable({
    providedIn: "root",
})
export class QuizUserService {
    constructor(private http: HttpClient) {
    }

    private quizUserUrl = "http://localhost:8080/quiz_users"


    findAll(): Observable<QuizUser[]> {
        return this.http.get<QuizUser[]>(this.quizUserUrl)
    }
}