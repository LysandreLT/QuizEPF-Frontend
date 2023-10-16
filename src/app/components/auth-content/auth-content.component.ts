import { Component } from '@angular/core';
import {UserService} from "../../services/UserService";

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {
  data:string[] = [];

  constructor(private userservice : UserService) {}

  ngOnInit() :  void {

  }
}
