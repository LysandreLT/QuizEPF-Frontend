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



  constructor(private quizUserService:QuizUserService) {

  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.quizUserService.findRanking(1).subscribe((data)=>{
      this.rankings = data;
      this.dataSource.data = data
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

}
