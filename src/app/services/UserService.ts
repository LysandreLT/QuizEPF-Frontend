import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {User} from "../models/User";
import {AuthentificationService} from "./auth/authentification.service";

@Injectable({
    providedIn: "root",
})
export class UserService {
    constructor( private authService:AuthentificationService) {
    }

    private userUrl = "users"


    findAll(): Observable<User[]> {
        return this.authService.getData(this.userUrl)
    }

    updateUser(user:User):Observable<User>{
        return this.authService.postData(`${this.userUrl}/${user.id}`, user)
    }

    deleteUser(id: bigint): Observable<Object> {
        return this.authService.deleteData(`${this.userUrl}/${id}`)
    }

}