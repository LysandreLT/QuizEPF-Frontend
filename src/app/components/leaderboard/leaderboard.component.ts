import {Component} from '@angular/core';
import {QuizUser} from "../../models/QuizUser";
import {QuizUserService} from "../../services/QuizUserService"
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent {

    quizUsers:QuizUser[];
    quiz_id: number;

    constructor(private quizUserService:QuizUserService, private route : ActivatedRoute) {
        this.quiz_id = +this.route.snapshot.params['id'];
        this.quizUserService.findByQuizId(this.quiz_id).subscribe((users) => {
          this.quizUsers = users.sort((a,b) => b.score - a.score)
        })
    }
}