import { Component } from '@angular/core';
import {QuizQuestion} from "../../models/QuizQuestion";
import {QuizAnswer} from "../../models/QuizAnswer";
import {Quiz} from "../../models/Quiz";
import { QuizService } from '../../services/QuizService';
import {User} from "../../models/User";



@Component({
  selector: 'create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {
  panels: any[] = [];

  //variables
  user:User = {id: (1), email: "", firstName: "", lastName: "", password: ""}
  quizData: Quiz = {name: '', user: this.user };

  //constructor
  constructor(private quizService: QuizService) {
  }


  //Sauvegarder Button
  saveQuiz() {
    const quiz: Quiz = {
      name: this.quizData.name,
      user: this.quizData.user
    };
    const questions: QuizQuestion[] = this.panels.map(panel => {
      return {
        question: panel.questionText,
        quiz: quiz,
        questionType: panel.showContent,
        questionValue: 50
      };
    });

    const answers: QuizAnswer[] = [];
    this.panels.forEach((panel, questionIndex) => {
      if (panel.showContent === 1) {
        panel.checkBoxes.forEach(checkBox => {
          answers.push({
            quizQuestion: questions[questionIndex],
            isTrue: checkBox.checked,
            answer: checkBox.text
          });
        });
      } else if (panel.showContent === 2) {
        answers.push({
          quizQuestion: questions[questionIndex],
          isTrue: false,
          answer: panel.correctAnswer
        });
      }
    });

    //Send to backend
    this.quizService.addQuiz(quiz).subscribe((q)=>{
      quiz.id = q.id;

      // Save questions
      for (let i = 0; i < this.panels.length; i++) {
        const panel = this.panels[i];
        const question: QuizQuestion = {
          question: panel.questionText,
          quiz: quiz,
          questionType: panel.showContent,
          questionValue: 50
        };


        this.quizService.addQuizQuestion(question).subscribe((quest)=>{
          question.id = quest.id;

          // Save answers
          if (panel.showContent === 1) {
            for (let j = 0; j < panel.checkBoxes.length; j++) {
              const checkBox = panel.checkBoxes[j];
              const answer: QuizAnswer = {
                quizQuestion: question,
                isTrue: checkBox.checked,
                answer: checkBox.text
              };


              this.quizService.addQuizAnswer(answer).subscribe((ans)=>{

                window.location.reload()
              })
            }

          } else if (panel.showContent === 2) {
            const answer: QuizAnswer = {
              quizQuestion: question,
              isTrue: true,
              answer: panel.correctAnswer
            };

            this.quizService.addQuizAnswer(answer).subscribe((ans)=>{

              window.location.reload()
            })
          }
        })
      }
    })


  }




  addPanel() {
    this.panels.push({ showContent: 0, checkBoxes: [] });
  }

  toggleContent(panel: any, contentNumber: number) {
    panel.showContent = contentNumber;
  }

  deletePanel(index: number) {
    this.panels.splice(index, 1);
  }

  addCheckBox(panel: any) {
    panel.checkBoxes.push({ checked: false, text: '' });
  }

  deleteCheckBox(panel: any, index: number) {
    panel.checkBoxes.splice(index, 1);
  }


}