import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { feed } from 'src/app/shared/models/feed';
import { FeedService } from 'src/app/shared/services/feed.service';
import { ReplyComponent } from '../../../reply/reply.component';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  firestore = new FirebaseTSFirestore();
  posts: feed[] = [];
  userUid?: string

  constructor(
    private feedService: FeedService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPostsByTrending();
    this.getUser()
  }
  getPostsByTrending() {
    this.feedService.getPostsByTrending(this.posts)

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
