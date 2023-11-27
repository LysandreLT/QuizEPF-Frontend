import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../services/QuizService";
import {QuizAnswer} from "../../models/QuizAnswer";
import {QuizQuestion} from "../../models/QuizQuestion";


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
  selectedAnswerId: number = 0;


  constructor(private route: ActivatedRoute, private quizService: QuizService, private router:Router) {
  }

  ngOnInit(): void {
    this.quiz_id = +this.route.snapshot.params['id'];
    this.quizService.findAllQuizAnswersByQuizId(this.quiz_id).subscribe((data: QuizAnswer[]) => {
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
    if (this.currentQuizQuestion.questionType === "SINGLECHOICE") {
      const selected = this.currentQuizAnswers.find(answer => answer.isTrue);
      if (selected) {
        this.selectedAnswerId = selected.id;
      }
    }
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
    switch (this.currentQuizQuestion.questionType) {
      case "SINGLECHOICE":
        this.quizAnswers.forEach(answer => {
          if (answer.id == this.selectedAnswerId) {
            answer.isTrue = true;
          }
          else if (answer.quizQuestion.questionType === "SINGLECHOICE" && answer.quizQuestion.id === this.currentQuizQuestion.id) {
            answer.isTrue = false;
          }
        })
        break;

      case "QCM":
        this.quizAnswers.forEach(answer => {
          const correspondingAnswer = this.currentQuizAnswers.find(currentAnswer => currentAnswer.id === answer.id);
          if (correspondingAnswer) {
            answer.isTrue = correspondingAnswer.isTrue;
          }
        })
        break;

      case "WRITTENANSWER":
        this.quizAnswers.forEach(answer => {
          const correspondingAnswer = this.currentQuizAnswers.find(currentAnswer => currentAnswer.id === answer.id);
          if (correspondingAnswer) {
            answer.answer = correspondingAnswer.answer;
          }
        })
        break;
    }
  }

  postAnswers(){
      this.quizService.postAnswers(this.quizAnswers, this.quiz_id,1).subscribe( (score)=>{
      this.router.navigate([`/leaderboard/${this.quiz_id}`])
    })
  }
}
