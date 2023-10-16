import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizQuestionComponent} from "./components/quiz-question/quiz-question.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {RegisterComponent} from "./components/register/register.component";
import {ResultsComponent} from "./components/results/results.component";
import {CreateQuizComponent} from "./components/create-quiz/create-quiz.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {TabsComponent} from "./components/tabs/tabs.component";
import {StartPageComponent} from "./components/start-page/start-page.component";
import {UserHomeComponent} from "./components/user-home/user-home.component";


const routes: Routes = [
  { path: "question", component: QuizQuestionComponent},
  { path: "results", component: ResultsComponent },
  { path: "login", component: LogInComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: UserHomeComponent },
  {path: "",  component: StartPageComponent, pathMatch: "full"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}