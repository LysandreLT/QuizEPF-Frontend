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
}
