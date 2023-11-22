import { Component } from '@angular/core';
import {Quiz} from "../../models/Quiz";
import {AuthentificationService} from "../../services/auth/authentification.service";
import { catchError, of} from 'rxjs';
import {QuizUserService} from "../../services/QuizUserService";

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent {

  quizs: Quiz[] = []

  constructor(private quizUserService:QuizUserService, private authService:AuthentificationService) {
    // TODO By user id
    this.quizUserService.getAllQuizByUserId(1).pipe(catchError((error) => {
      if (error.status === 401) {
        this.authService.setAuthToken(null);
      } else {
        console.error('Register error', error);
      }
      return of(error);
    }))
        .subscribe((quizs) => {this.quizs = quizs;
        console.log(this.quizs)});
  }

  modifyCard() {
    console.log('Modify card clicked');
  }

  deleteCard() {
    console.log('Delete card clicked');
  }

}
