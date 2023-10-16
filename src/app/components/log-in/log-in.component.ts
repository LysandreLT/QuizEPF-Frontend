import { Component, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from "../../services/UserService";
import {AuthentificationService} from "../../services/authentification.service";
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";

@Component({
  selector: 'login',
  templateUrl: 'log-in.component.html',
  styleUrls:[
      'log-in.component.css'
  ]
})
export class LogInComponent {
    //@Output() onSubmitLoginEvent = new EventEmitter();

    private loginUrl: string = "http://localhost:8080/login"
    login: string = "";
    password: string = "";
    constructor(private http: HttpClient, private authservice:AuthentificationService) {
    }

    form: FormGroup = new FormGroup({
        username: new FormControl(this.login,[Validators.required]),
        password: new FormControl(this.password,[Validators.required])
    });

    submit() {
        if (this.form.valid) {
            this.onSubmitLogin();
        }
    }
    onSubmitLogin(): void {
        //this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
        // Prepare the data to be sent in the POST request.
        const data = {
            login: this.login,
            password: this.password
        };

        // Send the HTTP POST request and subscribe to it to initiate the request.
        this.http.post(this.loginUrl, data)
            .pipe(catchError((error) => {
                // Handle errors here, e.g., display an error message.
                this.authservice.setAuthToken(null);
                console.error('Login error', error);
                return of(error); // You may want to return an observable here if needed
            }))
            .subscribe((response: any) => {
            // Handle the successful response here, e.g., set the authentication token and perform other actions.
            this.authservice.setAuthToken(response.token);
            console.log('Login success', response);
        });
    }
}
