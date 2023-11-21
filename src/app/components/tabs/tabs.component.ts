import { Component, ViewEncapsulation } from '@angular/core';
import {AuthentificationService} from "../../services/auth/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {

  constructor(private authService: AuthentificationService, private router:Router) {

  }

  onLogout(){
    var isLogout = confirm("Do you really want to logout?")
    if (isLogout){
      this.authService.logout();
      setTimeout(()=>{
        this.router.navigate(['']);
      },1000)

    }

  }
}
