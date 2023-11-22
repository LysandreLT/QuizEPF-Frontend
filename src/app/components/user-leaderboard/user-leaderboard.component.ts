import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Ranking} from "../../models/Ranking";
import {QuizUserService} from "../../services/QuizUserService";

@Component({
  selector: 'app-user-leaderboard',
  templateUrl: './user-leaderboard.component.html',
  styleUrls: ['./user-leaderboard.component.css']
})
export class UserLeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['ranking', 'quiz_name', 'score'];
  rankings:Ranking[] = []
  dataSource:MatTableDataSource<Ranking> = new MatTableDataSource<Ranking>(this.rankings);



  constructor(private quizUserService:QuizUserService) {}


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.quizUserService.findRanking(1).subscribe((data)=>{
      const bestScoresMap: Map<string, number> = new Map();

      // Iterate through the rankings to find the best score for each quiz
      data.forEach((ranking) => {
        const quizName = ranking.quiz_name;
        const currentScore = ranking.score;

        // Update the best score for the quiz
        if (!bestScoresMap.has(quizName) || currentScore > bestScoresMap.get(quizName)) {
          bestScoresMap.set(quizName, currentScore);
        }
      });

      // Filter the rankings array to keep only the best scores
      this.rankings = data.filter((ranking) => ranking.score === bestScoresMap.get(ranking.quiz_name));

      // Update the dataSource
      this.dataSource.data = this.rankings;

      // Set paginator after updating data
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

}
