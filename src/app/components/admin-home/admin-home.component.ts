import { Component } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/UserService";
import {catchError, of} from "rxjs";
import {AuthentificationService} from "../../services/auth/authentification.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  users:User[]
  updateId: number

  constructor(private userService:UserService, private authService:AuthentificationService) {
    this.userService.findAll().pipe(catchError((error) => {
      if (error.status === 401) {
        this.authService.setAuthToken(null);
      } else {
        console.error('Register error', error);
      }
      return of(error);
    }))
        .subscribe((users) => this.users = users);
  }

  modifyQuiz(id: number) {

  }

  deleteQuiz(id: number) {

  }

  updateUser(user) {
    this.userService.updateUser(user).subscribe()
    this.updateId = null
  }

  onCancelUpdate(){
    this.updateId=null
  }

  onUpdateUser(id: number) {
    this.updateId = id
  }

  deleteUser(id: number) {
    var isDeleted = confirm("Do you really want to delete this records?")

    if (isDeleted)
    {
      this.userService.deleteUser(id).subscribe(() => {
        this.userService.findAll().subscribe(
            (users)=> this.users = users)
      })
    }
  }
}
