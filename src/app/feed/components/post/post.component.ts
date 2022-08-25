import { Component, Inject, OnInit } from '@angular/core';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { feed } from '../../models/feed';
import { FeedService } from '../../services/feed.service';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';

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
    private dialog: MatDialog
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
  }

  getUser() {
    this.feedService.getUser().subscribe(
      a => {
        this.userUid = a?.uid
      }
    )
  }

  likes(post: feed) {
    this.feedService.likes(post).subscribe()
  }

}

