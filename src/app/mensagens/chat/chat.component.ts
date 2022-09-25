import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message: string = '';
  element: any;
  public name?: string = this.name;

  constructor(public chatService: ChatService) {
    this.chatService.chargeMessages().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }
  ngOnInit(): void {
    this.element = document.getElementById('app-message');
    this.getUser()
  }

  getUser() {
    this.chatService.getUser().subscribe(
      (a: any) => {
        this.name = a?.name
        console.log(this.name)
      }
    )
  }

  sendMessage() {
    console.log(this.message);
    if (this.message.length == 0) {
      return;
    }
    this.chatService
      .sendMessage(this.message, this.name!)
      .then(() => (this.message = ''))
      .catch((error) => {
        console.error('Erro ao enviar mensagem', Error);
      });
  }
}
