import { Component } from '@angular/core';

@Component({
  selector: 'app-page-quiz',
  templateUrl: './page-quiz.component.html',
  styleUrls: ['./page-quiz.component.css']
})
export class PageQuizComponent {

  modifyCard() {
    console.log('Modify card clicked');
  }

  deleteCard() {
    console.log('Delete card clicked');
  }

}
