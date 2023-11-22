import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuestionType} from "../../models/QuizAnswerType";
import {QuizAnswer} from "../../models/QuizAnswer";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent {

  @Input({required:true}) question:string
  @Input({required:true}) questionType:QuestionType
  @Input({required:true}) answers:QuizAnswer[]
  @Input() index:number

  @Output() answersIdEvent = new EventEmitter<void>();
  @Output() previousQuestionEvent = new EventEmitter<void>();
  @Output() nextQuestionEvent = new EventEmitter<void>();



  nextQuestionEmit(){
    this.nextQuestionEvent.emit();
  }
  previousQuestionEmit(){
    this.previousQuestionEvent.emit();
  }
  answersEmit(){
    this.answersIdEvent.emit();
  }

}
