import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from "../../services/UserService";
import {Observable} from "rxjs";
import {User} from "../../models/User";

@Component({
  selector: 'register',
  templateUrl :'./register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
  });

  users:Observable<User[]>
  constructor(private userservice : UserService) {
    this.users = userservice.findAll()
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
