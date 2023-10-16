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

  modifyUser(id: bigint) {

  }

  deleteUser(id: bigint) {
    this.userService.deleteUser(id)
  }

}
