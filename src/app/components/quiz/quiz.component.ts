import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../services/QuizService";
import {QuizAnswer} from "../../models/QuizAnswer";
import {QuizQuestion} from "../../models/QuizQuestion";
import {QuestionType} from "../../models/QuizAnswerType";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz_id: number
  quizName: string
  quizAnswers: QuizAnswer[] = []
  quizQuestions: QuizQuestion[] = []
  currentQuizQuestion: QuizQuestion
  currentQuizAnswers: QuizAnswer[] = []
  quizIndex: number = 0
  selectedAnswerId: number;
  writtenAnswer: string;


  constructor(private route: ActivatedRoute, private quizService: QuizService) {
  }

  ngOnInit(): void {
    //this.quiz_id = this.route.snapshot.params['quiz_id'];
    this.quizService.findAllQuizAnswersByQuizId(1).subscribe((data: QuizAnswer[]) => {
      this.quizAnswers = data;
      this.quizAnswers.forEach((quizAnswer: QuizAnswer) => {
        if (!this.quizQuestions.find(quizQuestion => quizQuestion.id === quizAnswer.quizQuestion.id)) {
          this.quizQuestions.push(quizAnswer.quizQuestion);
        }
      });
      this.currentQuizQuestion = this.quizQuestions[this.quizIndex];
      this.updateCurrentQuizAnswers();
    });
  }

  updateCurrentQuizAnswers(): void {
    this.currentQuizAnswers = this.quizAnswers.filter(quizAnswer => quizAnswer.quizQuestion.id === this.currentQuizQuestion.id);
  }

  getNextQuestion(): void {
    if (this.quizIndex < this.quizQuestions.length - 1) {
      this.quizIndex++;
      this.currentQuizQuestion = this.quizQuestions[this.quizIndex];
      this.updateCurrentQuizAnswers();
    }
  }

  getPreviousQuestion(): void {
    if (this.quizIndex > 0) {
      this.quizIndex--;
      this.currentQuizQuestion = this.quizQuestions[this.quizIndex];
      this.updateCurrentQuizAnswers();
    }
  }

  eventClicked(): void {
    console.log("Selected Answer ID: ", this.selectedAnswerId);
    console.log("Written Answer: ", this.writtenAnswer);

    switch (this.currentQuizQuestion.questionType) {
      case "SINGLE":
        break;
      case "WRITTENANSWER":
        break;
    }
  }

  protected readonly QuestionType = QuestionType;
}
