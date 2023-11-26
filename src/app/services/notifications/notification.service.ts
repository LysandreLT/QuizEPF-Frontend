import { Injectable } from '@angular/core';
import {Message, MessageService} from "primeng/api";
import {NotificationType} from "../../models/enums/NotificationType";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  add(notificationType:NotificationType, detail:string, summary?:string, closable?: boolean,message?: Message){
    var severity = ''
    switch (notificationType){
      case NotificationType.Warning:
        severity = 'warn'
        break
      case NotificationType.Info:
        severity = 'info'
        break
      case NotificationType.Error:
        severity = 'error'
        break
      case NotificationType.Success:
        severity = 'success'
        break
    }
    if (summary===null || summary===''){
      summary = severity[0].toUpperCase() + severity.substring(1).toLowerCase();
    }
    this.messageService.add({severity:severity, summary:summary, detail:detail,closable:closable});
  }
}
