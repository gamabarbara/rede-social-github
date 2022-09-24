import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { user } from 'src/app/shared/models/user';
import { feed } from 'src/app/shared/models/feed';
import { FeedService } from 'src/app/shared/services/feed.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.css']
})
export class ModalAdminComponent implements OnInit {
  userInfos?: user;
  public postUser?: feed;
  public username?: string;
  public blocked!: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) public post: feed,
    private dialog: DialogRef,
    private feedService: FeedService,
    private router: Router,
    private service: PostService
  ) { }

  ngOnInit(): void {
    this.getUserById();
  }

  blockUserById() {
    this.service.blockUserById(this.post.creatorId, this.blocked)
    this.dialog.close();
  }


  getUserById() {
    this.service.getUserById(this.post.creatorId).subscribe(a => {
      this.blocked = a.blocked
    });
  }

  deletePost(postId?: string) {
    this.feedService.deletePost(postId).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/feed']);
        });
      }
    });
  }
}
