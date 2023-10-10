import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {User} from "../models/User";

@Injectable({
    providedIn: "root",
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    private studentsUrl = "http://localhost:8080/users"

    findAll(): Observable<User[]> {
        return this.http.get<User[]>(this.studentsUrl)
    }


}