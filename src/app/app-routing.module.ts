import {ErrorHandler, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizQuestionComponent} from "./components/quiz-question/quiz-question.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {RegisterComponent} from "./components/register/register.component";
import {ResultsComponent} from "./components/results/results.component";
import {LeaderboardComponent} from "./components/leaderboard/leaderboard.component";
import {CreateQuizComponent} from "./components/create-quiz/create-quiz.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {TabsComponent} from "./components/tabs/tabs.component";
import {StartPageComponent} from "./components/start-page/start-page.component";
import {UserHomeComponent} from "./components/user-home/user-home.component";
import {authGuard} from "./services/auth/auth.guard";
import {GlobalErrorHandler} from "./services/notifications/global-error-handler.service";



const routes: Routes = [
  { path: "login", component: LogInComponent },
  { path: "register", component: RegisterComponent},
  { path: "question", component: QuizQuestionComponent,canActivate: [authGuard]},
  { path: "results", component: ResultsComponent,canActivate: [authGuard] },
  { path : "leaderboard", component : LeaderboardComponent,canActivate: [authGuard]},
  { path: "createQuiz", component: CreateQuizComponent,canActivate: [authGuard] },
  { path: "adminHome", component: AdminHomeComponent ,canActivate: [authGuard]},
  { path: "home", component: UserHomeComponent, canActivate: [authGuard] },
  {path: "",  component: StartPageComponent, pathMatch: "full",canActivate: [authGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}