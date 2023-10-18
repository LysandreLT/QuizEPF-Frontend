import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from "../../services/auth/authentification.service";
import {catchError, of} from "rxjs";
import {AuthenticationRequest} from "../../models/AuthentificationRequest";
import {Router} from "@angular/router";
import {NotificationComponent} from "../notification/notification.component";
import {NotificationType} from "../../models/enums/NotificationType";

@Component({
  selector: 'login',
  templateUrl: 'log-in.component.html',
  styleUrls:[
      'log-in.component.css'
  ]
})
export class LogInComponent {
    //@Output() onSubmitLoginEvent = new EventEmitter();

    authRequest: AuthenticationRequest = {};
    constructor(private authservice : AuthentificationService, private router : Router) {
    }

    form: FormGroup = new FormGroup({
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
    });

    submit() {
        if (this.form.valid) {
            this.onSubmitLogin();
        }
    }
    onSubmitLogin(): void {

        this.authRequest.email=this.form.get("username").value,
        this.authRequest.password= this.form.get("password").value

        this.authservice.login(this.authRequest)
            .pipe(catchError((error) => {
                this.authservice.setAuthToken(null);
                console.error('Login error', error);

                return of(error);
            }))
            .subscribe((response) => {

            this.authservice.setAuthToken(response.password);

            console.log('Login success', response.password);
            this.router.navigate(['/home']);
        });
    }
}

