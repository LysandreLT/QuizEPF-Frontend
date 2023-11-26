import { Component } from '@angular/core';
import {AuthentificationService} from "../../services/auth/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  constructor(private authService: AuthentificationService, private router:Router) {

  }
  onLogout(){
    const isLogout = confirm("Do you really want to logout?")
    if (isLogout){
      this.authService.logout();
      setTimeout(()=>{
        this.router.navigate(['/login']);
      },1000)

    }

  }
}
