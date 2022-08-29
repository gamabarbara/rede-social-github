import { Component, Inject, OnInit } from '@angular/core';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { feed } from '../../models/feed';
import { FeedService } from '../../services/feed.service';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: feed[] = [];
  userUid?: string
  feed?: feed



  constructor(
    private feedService: FeedService,
    private dialog: MatDialog,
    private dialogRef: Dialog, 
  ) { }

  ngOnInit(): void {

    this.getPosts();
    this.getUser()
  }
  getPosts() {
    this.feedService.getPosts(this.posts)
  }

  onReplyClick(post: feed) {
    this.dialog.open(ReplyComponent, { data: post })
    /* const ref =  */
    /*  ref.componentInstance.getPosts(post) */
  }

  deletePost(postId?: string) {
    this.feedService.deletePost(postId).subscribe()
    setInterval(this.deletePostReload, 3000)
  }

  deletePostReload() {
    location.href = '/feed'
  }

  getUser() {
    this.feedService.getUser().subscribe(
      a => {
        this.userUid = a?.uid
      }
    )
  }

  likes(post: feed) {
    this.feedService.likes(post).subscribe({
      next: (res) => {
        this.dialogRef.closeAll()
        location.href = '/feed'
      }
    })
  }

}

