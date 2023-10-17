import {ErrorHandler, Injectable} from '@angular/core';
import {NotificationType} from "../../models/enums/NotificationType";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthentificationService} from "../auth/authentification.service";
import {NotificationComponent} from "../../components/notification/notification.component";
import {MessageService} from "primeng/api";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{
  constructor(private authService:AuthentificationService) { }

  handleError(error: any): void {

    if (error instanceof HttpErrorResponse) {
      //Backend returns unsuccessful response codes such as 404, 500 etc.
      console.error('Backend returned status code: ', error.status);
      console.error('Response body:', error.message);
      if (error.status == 401){
        this.authService.setAuthToken(null);
      }
    } else {
      //A client-side or network error occurred.
      console.error('An error occurred:', error.message);
    }
  }
}
