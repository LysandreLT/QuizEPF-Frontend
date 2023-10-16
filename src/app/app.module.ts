import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ResultsComponent } from './components/results/results.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import {LeaderboardComponent} from "./components/leaderboard/leaderboard.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon"; // Import NoopAnimationsModule



@NgModule({
    declarations: [
        AppComponent,
        QuizQuestionComponent,
        ResultsComponent,
        LogInComponent,
        RegisterComponent,
        AdminHomeComponent,
        UserListComponent,
        NavbarComponent,
        CreateQuizComponent
    ],
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        AppRoutingModule,
        MatCardModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatListModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
