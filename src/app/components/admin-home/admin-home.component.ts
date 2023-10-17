import { Component } from '@angular/core';
import {QuizUser} from "../../models/QuizUser";
import {QuizUserService} from "../../services/QuizUserService";
import {User} from "../../models/User";
import {UserService} from "../../services/UserService";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  users:User[]
  updateId: bigint

  constructor(private userService:UserService) {
    this.userService.findAll().subscribe((users) =>
    {
      this.users = users
    });


  }

  modifyQuiz(id: bigint) {

  }

  deleteQuiz(id: bigint) {

  }

  updateUser(user) {
    this.userService.updateUser(user).subscribe()
    this.updateId = null
  }

  onCancelUpdate(){
    this.updateId=null
  }

  onUpdateUser(id: bigint) {
    this.updateId = id
  }

  deleteUser(id: bigint) {
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
