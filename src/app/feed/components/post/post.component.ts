import { Component, OnInit } from '@angular/core';
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
  numberOfLike: number=0;
  constructor(
    private feedService: FeedService, 
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getPosts();
    console.log(this.posts)
  }
  getPosts() {
    this.feedService.getPosts(this.posts)
  }
  onReplyClick() {
    this.dialog.open(ReplyComponent)
  }
  likeButtonClick() {
    this.numberOfLike++;
  }

}

