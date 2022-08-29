import { Component, Inject, OnInit } from '@angular/core';
import { feed } from '../../models/feed';
import { FeedService } from '../../services/feed.service';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from 'src/app/auth/models/user';
import { map, merge } from 'rxjs';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  private usersCollection = this.store.collection<user>('users');
  firestore = new FirebaseTSFirestore();
  private text!: string;
  private name?: string;
  public comments: string[] = [];

  constructor(
    private service: FeedService,
    @Inject(MAT_DIALOG_DATA) private post: feed,
    private store: AngularFirestore,
    private dialogRef: Dialog, 
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.comments = this.post.comments;
  }

  getUser() {
    this.service.getUser().subscribe((a) => {
      this.name = a?.name;
    });
  }

  comment(commentInput: HTMLInputElement) {
    this.text = `${this.name}: ${commentInput.value}`;
    console.log(this.text);
    return this.service.comment(this.post, this.text).subscribe({
      next: (res) => {
      this.dialogRef.closeAll()
      location.href = '/feed'
    }
  })
  }
    };
    

