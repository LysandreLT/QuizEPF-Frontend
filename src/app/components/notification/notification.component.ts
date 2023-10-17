import { Component } from '@angular/core';
import {NotificationType} from "../../models/enums/NotificationType";
import {Message} from "primeng/api";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

/*  messages: Message[] | undefined*/
  constructor(private messageService: MessageService) { }
  createNotification(notificationType: NotificationType, detail: string, summary?:string, closable?: boolean){
    var severity = ''

    switch (notificationType){
      case NotificationType.Error:
        severity = 'error'
        break
      case NotificationType.Info:
        severity = 'info'
        break
      case NotificationType.Success:
        severity='success'
        break
      case NotificationType.Warning:
        severity = 'warn'
        break
    }

    this.messageService.add({ severity: severity, summary: summary, detail: detail, closable:closable });

/*    this.messages= [{
      severity:severity,
      summary:summary,
      detail:detail,
      closable:closable
    }]*/
  }
}