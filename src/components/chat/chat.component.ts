import { Component, OnInit } from '@angular/core';
import { ChatService} from "../../Services/Chat/chat.service";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../Services/Auth/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  chat$: Observable<any>;
  newMsg: string;

  constructor(
    public cs: ChatService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {
  }

  ngOnInit() {
    const chatId = this.route.snapshot.paramMap.get('id');
    console.log(this.route);
    //const source = this.cs.get(chatId);
    //this.chat$ = this.cs.joinUsers(source);

  }

  submit(chatId) {
    this.cs.sendMessage(chatId, this.newMsg);
    this.newMsg = '';
  }

  trackByCreated(i, msg) {
    return msg.createdAt;
  }
}
