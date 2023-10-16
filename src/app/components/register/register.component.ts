import { Input, Component, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {UserService} from "../../services/UserService";
import {catchError, Observable, of} from "rxjs";
import {User} from "../../models/User";
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl :'register.component.html',
  styleUrls: ['register.component.css']

})
export class RegisterComponent {

/*
  users:Observable<User[]>*/

  private registerUrl: string = "http://localhost:8080/register"
  user = {
    firstName: '',
    lastName: '',
    login: '',
    password: ''
  };

  form: FormGroup = new FormGroup({
    firstName: new FormControl(this.user.firstName,[Validators.required]),
    lastName: new FormControl(this.user.lastName,[Validators.required]),
    email: new FormControl(this.user.login,[Validators.required]),
    password: new FormControl(this.user.password,[Validators.required])
  });

  constructor(private http: HttpClient, private authservice:AuthentificationService,private router: Router  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.onRegister();
    }
  }

  onRegister():void {
    this.user.firstName = this.form.get("firstName").value
    this.user.lastName = this.form.get("lastName").value
    this.user.login = this.form.get("email").value
    this.user.password = this.form.get("password").value


    console.log(this.user)

    this.http.post(this.registerUrl, this.user)
      .pipe(catchError((error) => {
        // Handle errors here, e.g., display an error message.
        this.authservice.setAuthToken(null);
        console.error('Register error', error);
        return of(error); // You may want to return an observable here if needed
      }))
      .subscribe((response: any) => {
        this.authservice.setAuthToken(response.token);

        console.log('Register success', response);
        this.router.navigate([''])
      });


  }

/*  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();*/
}
