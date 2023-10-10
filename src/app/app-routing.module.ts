import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizQuestionComponent} from "./quiz-question/quiz-question.component";

const routes: Routes = [
  { path: "question", component: QuizQuestionComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}