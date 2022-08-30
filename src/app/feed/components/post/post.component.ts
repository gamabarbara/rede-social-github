import { Component, Inject, OnInit } from '@angular/core';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { feed } from '../../models/feed';
import { FeedService } from '../../services/feed.service';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';

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
  status: boolean = false;

constructor(
    private feedService: FeedService,
    private dialog: MatDialog,
    private dialogRef: Dialog, 
    private router: Router
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
    this.feedService.deletePost(postId).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/feed']);
      }); 
      }
    })
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
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/feed']);
      }); 
      }
    })
  }

  liked() {
    const element = document.querySelector('#item')
    if(element?.classList.contains('.liked')) {
      element.classList.add('.liked')
    } else {
      element?.classList.remove('.liked')
    }
  }

  clickEvent() {
    this.status = !this.status;
  }
}

