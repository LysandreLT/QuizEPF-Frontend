import { Component } from '@angular/core';
import {Quiz} from "../../models/Quiz";
import {AuthentificationService} from "../../services/auth/authentification.service";
import { catchError, of} from 'rxjs';
import {QuizService} from "../../services/QuizService";

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent {

  quizs: Quiz[] = []

  constructor(private quizService:QuizService, private authService:AuthentificationService) {
    // TODO By user id
    this.quizService.getAllQuizByUserId(1).pipe(catchError((error) => {
      if (error.status === 401) {
        this.authService.setAuthToken(null);
      } else {
        console.error('Register error', error);
      }
      return of(error);
    }))
        .subscribe((quizs) => this.quizs = quizs);
  }

  modifyCard() {
    // TODO Modifier Quiz
  }

  deleteQuiz(id: number) {
    const isDeleted = confirm("Do you really want to delete this records?");
    if (isDeleted)
    {
      this.quizService.deleteQuiz(id).subscribe(() => {
        // TODO By user id
        this.quizService.getAllQuizByUserId(1).subscribe(
            (quizzes)=> this.quizs = quizzes)
      })
    }
  }

}
