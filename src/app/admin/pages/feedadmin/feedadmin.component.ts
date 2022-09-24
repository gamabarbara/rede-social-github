import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { feed } from 'src/app/shared/models/feed';
import { FeedService } from 'src/app/shared/services/feed.service';
import { ModalAdminComponent } from '../../components/modal-admin/modal-admin.component';

@Component({
  selector: 'app-feedadmin',
  templateUrl: './feedadmin.component.html',
  styleUrls: ['./feedadmin.component.css'],
})
export class FeedadminComponent implements OnInit {
  posts: feed[] = [];
  userUid?: string;
  feed?: feed;

  constructor(
    private feedService: FeedService,
    private dialogRef: Dialog,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getUser();
  }
  getPosts() {
    this.feedService.getPosts(this.posts);
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
    this.feedService.likes(post).subscribe({
      next: (res) => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.dialogRef.closeAll();
            this.router.navigate(['/admin/feed']);
          });
      },
    });
  }

  openUserInfo(post: feed) {
    this.dialog.open(ModalAdminComponent, { data: post });
  }
}
