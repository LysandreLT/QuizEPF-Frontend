import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {QuizUser} from "../../models/QuizUser";
import {QuizUserService} from "../../services/QuizUserService"

class Entry {
  public name: string = "default"
  public score: number = 0

  public constructor(init?:Partial<Entry>) {
    Object.assign(this, init);
  }
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent {

  quizUsers:Observable<QuizUser[]>

    constructor(private quizUserService:QuizUserService) {

        this.quizUsers = this.quizUserService.findAll()

    }
}