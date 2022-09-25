import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Message } from '../models/message';
import { map, mergeMap } from 'rxjs';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { user } from '../models/user';
import { AuthService } from './auth.service';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection!: AngularFirestoreCollection<Message>;

  public chats: Message[] = [];
  firestore = new FirebaseTSFirestore();
  private usersColletion = this.store.collection<user>('users');
  private currentUser = this.auth.currentUser;
  date = new Date().toLocaleString('pt-BR');
  authentication = new FirebaseTSAuth();

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private store: AngularFirestore
  ) { }


  getUser() {
    return this.currentUser.pipe(
      mergeMap((user) => {
        return this.usersColletion.doc(user?.uid).get();
      }),
      map((userDoc) => {
        return userDoc.data();
      })
    );
  }

  chargeMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats', (ref) =>
      ref.orderBy('closed', 'desc').limit(50)
    );

    return this.itemsCollection.valueChanges().pipe(
      map((messages: Message[]) => {
        console.log(messages);
        this.chats = [];
        for (let message of messages) {
          this.chats.unshift(message);
        }
        return this.chats;
      })
    );
  }

  sendMessage(text: string, name: string) {
    let message: Message = {
      name: name,
      message: text,
      date: this.date,
      creatorPhoto: this.authentication.getAuth().currentUser?.photoURL,
      closed: new Date().getTime(),
    };
    return this.itemsCollection.add(message);
  }
}
