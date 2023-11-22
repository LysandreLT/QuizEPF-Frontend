import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../services/QuizService";
import {QuizAnswer} from "../../models/QuizAnswer";
import {QuizQuestion} from "../../models/QuizQuestion";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  quiz_id:number
  quizName:string
  quizAnswers:QuizAnswer[] = []
  quizQuestions:QuizQuestion[] = []

  currentQuizQuestion:QuizQuestion
  currentQuizAnswers:QuizAnswer[] = []
  quizIndex:number = 0
  question: string = "";


  constructor(private route:ActivatedRoute, private quizService:QuizService) {

  }

  ngOnInit(): void {
    //this.quiz_id = this.route.snapshot.params['quiz_id'];
    this.quizService.findAllQuizAnswersByQuizId(1).subscribe((data:QuizAnswer[])=>{
      this.quizAnswers = data;
      console.log(this.quizAnswers)
      this.quizAnswers.forEach((quizAnswer:QuizAnswer)=>{

        if (!this.quizQuestions.find((quizQuestion)=>{
          return quizQuestion.id = quizAnswer.quizQuestion.id;
        })){
          this.quizQuestions.push(quizAnswer.quizQuestion);
        }});

      this.currentQuizQuestion = this.quizQuestions[this.quizIndex];
      this.currentQuizAnswers = this.quizAnswers.filter((quizAnswer, index,array)=>{
        quizAnswer.quizQuestion.id = this.currentQuizQuestion.id;
      })
    })
  }

  eventClicked(){
    console.log("event clicked! : ")
  }

}
