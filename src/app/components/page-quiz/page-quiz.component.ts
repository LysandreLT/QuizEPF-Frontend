import {Component} from '@angular/core';
import {Quiz} from "../../models/Quiz";
import {AuthentificationService} from "../../services/auth/authentification.service";
import {catchError, of} from "rxjs";
import {QuizService} from "../../services/QuizService";
import {NotificationService} from "../../services/notifications/notification.service";
import {NotificationType} from "../../models/enums/NotificationType";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-quiz',
  templateUrl: './page-quiz.component.html',
  styleUrls: ['./page-quiz.component.css']
})
export class PageQuizComponent {

  quizzes:Quiz[]

  constructor(private router : Router,private quizService:QuizService, private authService:AuthentificationService,private notification:NotificationService) {
    this.quizService.findAllQuizzes().pipe(catchError((error) => {
      if (error.status === 401) {
        this.authService.setAuthToken(null);
      }
      this.notification.add(NotificationType.Error, error.message,error.status, false);
      return of(error);
    }))
        .subscribe((quizzes) => this.quizzes = quizzes);


  }
  updateQuiz() {
    console.log('Modify card clicked');
  }

  deleteQuiz() {
    console.log('Delete card clicked');
  }

  participate(id:number){
    this.router.navigate([`quiz/${id}`])
  }

}
