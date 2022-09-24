import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore'
import { feed } from 'src/app/shared/models/feed';
@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
}) 
export class PostFeedComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: feed[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onCreatePostClick() {
    this.dialog.open(CreatePostComponent)
  }

}


