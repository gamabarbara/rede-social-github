import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

public chats: Observable<any>;

  constructor(db: AngularFirestore) {
    this.chats = db.collection('chats').valueChanges();
   }

  ngOnInit(): void {
  }


}
