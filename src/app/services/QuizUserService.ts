import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {QuizUser} from "../models/QuizUser";
import {AuthentificationService} from "./auth/authentification.service";

@Injectable({
    providedIn: "root",
})
export class QuizUserService {
    constructor(private authService:AuthentificationService) {
    }

    private quizUserUrl = "quiz_users"


    findAll(): Observable<QuizUser[]> {
        return this.authService.getData(this.quizUserUrl)
    }
}