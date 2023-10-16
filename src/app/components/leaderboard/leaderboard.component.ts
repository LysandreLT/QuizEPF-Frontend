import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {QuizUser} from "../../models/QuizUser";
import {QuizUserService} from "../../services/QuizUserService"

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent {

  quizUsers:QuizUser[]

    constructor(private quizUserService:QuizUserService) {

        this.quizUserService.findAll().subscribe((users) => {
          this.quizUsers = users.sort((a,b) => b.score - a.score)
        })


    }

}