import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

interface QuizData {
  ranking: number;
  quizname: string;
}

@Component({
  selector: 'app-user-leaderboard',
  templateUrl: './user-leaderboard.component.html',
  styleUrls: ['./user-leaderboard.component.css']
})
export class UserLeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['ranking', 'quizname'];


  data: QuizData[] = [
    { ranking: 1, quizname: 'Quiz 1' },
    { ranking: 2, quizname: 'Quiz 2' },
    { ranking: 3, quizname: 'Quiz 3' },
    { ranking: 4, quizname: 'Quiz 4' },
    { ranking: 5, quizname: 'Quiz 5' },
    { ranking: 6, quizname: 'Quiz 6' },
    { ranking: 7, quizname: 'Quiz 7' },
  ];

  dataSource = new MatTableDataSource<QuizData>(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

}
