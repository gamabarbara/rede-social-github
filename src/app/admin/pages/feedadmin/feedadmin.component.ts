import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { feed } from 'src/app/feed/models/feed';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-feedadmin',
  templateUrl: './feedadmin.component.html',
  styleUrls: ['./feedadmin.component.css']
})
export class FeedadminComponent implements OnInit {

  posts: feed[] = [];
  userUid?: string
  feed?: feed



  constructor(
    private feedService: FeedService,
    private dialogRef: Dialog,
  ) { }

  ngOnInit(): void {

    this.getPosts();
    this.getUser()
  }
  getPosts() {
    this.feedService.getPosts(this.posts)
  }


  deletePost(postId?: string) {
    this.feedService.deletePost(postId).subscribe()
    setInterval(this.deletePostReload, 3000)
  }

  deletePostReload() {
    location.href = '/admin/feed'
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
