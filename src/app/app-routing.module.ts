import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizQuestionComponent} from "./quiz-question/quiz-question.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegisterComponent} from "./register/register.component";
import {ResultsComponent} from "./results/results.component";


const routes: Routes = [
  { path: "question", component: QuizQuestionComponent },
  { path: "results", component: ResultsComponent },
  { path: "login", component: LogInComponent },
  { path: "register", component: RegisterComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}