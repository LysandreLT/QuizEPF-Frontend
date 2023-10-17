import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent {

  modifyCard() {
    console.log('Modify card clicked');
  }

  deleteCard() {
    console.log('Delete card clicked');
  }

}
