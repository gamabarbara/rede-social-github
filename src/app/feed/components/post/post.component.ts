import { Component, OnInit } from '@angular/core';
import {
  FirebaseTSFirestore
} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import {
  AngularFirestore
} from '@angular/fire/compat/firestore';
import { feed } from 'src/app/shared/models/feed';
import { FeedService } from 'src/app/shared/services/feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: feed[] = [];
  userUid?: string;
  feed?: feed;
  status: boolean = false;

  constructor(
    private feedService: FeedService,
    private dialog: MatDialog,
    private router: Router,
    private store: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getUser();
  }
  getPosts() {
    this.feedService.getPosts(this.posts);
  }

  onReplyClick(post: feed) {
    this.dialog.open(ReplyComponent, { data: post });
  }

  deletePost(postId?: string) {
    this.feedService.deletePost(postId).subscribe({
      next: (res) => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/feed']);
          });
      },
    });
  }

  getUser() {
    this.feedService.getUser().subscribe((a: any) => {
      this.userUid = a?.uid;
    });
  }
 

  likes(post: feed) {
    return this.feedService.likes(post).subscribe({
      next: (res) => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/feed']);
          });
      },
    }) 
  }

  liked() {
    const element = document.querySelector('#item');
    if (element?.classList.contains('.liked')) {
      element.classList.add('.liked');
    } else {
      element?.classList.remove('.liked');
    }
  }

  clickEvent() {
    this.status = !this.status;
  }
}
