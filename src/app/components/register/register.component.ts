import { Input, Component, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {UserService} from "../../services/UserService";
import {catchError, Observable, of} from "rxjs";
import {User} from "../../models/User";
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../../services/auth/authentification.service";
import {Router} from "@angular/router";
import {RegisterRequest} from "../../models/RegisterRequest";
import {AuthenticationResponse} from "../../models/AuthentificationResponse";

@Component({
  selector: 'register',
  templateUrl :'register.component.html',
  styleUrls: ['register.component.css']

})
export class RegisterComponent {


  registerRequest: RegisterRequest = {};


  form: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor(private authservice:AuthentificationService,private router: Router  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.onRegister();
    }
  }

  onRegister():void {
    this.registerRequest.firstName = this.form.get("firstName").value
    this.registerRequest.lastName = this.form.get("lastName").value
    this.registerRequest.email = this.form.get("email").value
    this.registerRequest.password = this.form.get("password").value

    this.authservice.register(this.registerRequest)
        .pipe(catchError((error) => {
      this.authservice.setAuthToken(null);
      console.error('Register error', error);

      return of(error);
    }))
        .subscribe((response: any) => {
          this.authservice.setAuthToken(response.password);

          console.log('Register success', response);
          this.router.navigate(['/login'])
        });
  }
}
