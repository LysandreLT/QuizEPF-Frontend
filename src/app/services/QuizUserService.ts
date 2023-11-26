import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {QuizUser} from "../models/QuizUser";
import {AuthentificationService} from "./auth/authentification.service";
import {Ranking} from "../models/Ranking";
import {Quiz} from "../models/Quiz";


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


    findRanking(userId:number):Observable<Ranking[]>{
        return this.authService.getData(`${this.quizUserUrl}/${userId}`)
    }

    findByQuizId(quizId:number):Observable<QuizUser[]>{
        return this.authService.getData(`${this.quizUserUrl}/quiz/${quizId}`);
    }
}