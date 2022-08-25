import { Component, Inject, OnInit } from '@angular/core';
import { feed } from '../../models/feed';
import { FeedService } from '../../services/feed.service';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from 'src/app/auth/models/user';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  private usersCollection = this.store.collection<user>('users')
firestore = new FirebaseTSFirestore();
feed?: feed

  constructor(private service: FeedService, @Inject(MAT_DIALOG_DATA) private postId: string, private store: AngularFirestore) { }

  ngOnInit(): void {
  }

  comment(post: feed, comment: string) {
    return this.service.comment(post, comment).subscribe()
  }

  onSendClick(commentInput: HTMLInputElement) {
    if(!(commentInput.value.length > 0)) return;
    this.firestore.create(
      {
        path: ["Posts", this.postId, "PostComments"], 
        data: {
          comment: commentInput.value, 
          creatorId: this.usersCollection.doc(this.feed?.creatorId),
          creatorName: this.usersCollection.doc(this.feed?.creatorName),
          timestamp: FirebaseTSApp.getFirestoreTimestamp()
        }, 
        onComplete: (docId) => {
          console.log("informacao chegou")
          commentInput.value = "";
        }
      }
    )
  }


}
