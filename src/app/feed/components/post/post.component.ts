import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { feed } from '../../models/feed';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: feed[] = [];
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.getPosts();
    console.log(this.posts)
  }
  getPosts() {
    this.feedService.getPosts(this.posts)
  }

}

