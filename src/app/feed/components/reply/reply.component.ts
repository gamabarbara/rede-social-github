import { Component, Inject, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { FeedService } from 'src/app/shared/services/feed.service';
import { feed } from 'src/app/shared/models/feed';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  private text!: string;
  private name?: string;
  public comments: string[] = [];

  constructor(
    private service: FeedService,
    @Inject(MAT_DIALOG_DATA) private post: feed,
    private dialogRef: Dialog,
    private router: Router
  ) { }

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
    commentInput.value = ''
    return this.service.comment(this.post, this.text).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.dialogRef.closeAll();
          this.router.navigate(['/feed']);
      }); 
      }
    })
  }
};

