import { Component, Inject, OnInit } from '@angular/core';
import { user } from 'src/app/auth/models/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { feed } from 'src/app/feed/models/feed';
import { ServicesService } from '../../services/services.service';
import { DialogRef } from '@angular/cdk/dialog';
import { FeedService } from 'src/app/feed/services/feed.service';
import { Router } from '@angular/router';

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
    private service: ServicesService, 
    @Inject(MAT_DIALOG_DATA) public post: feed, 
    private dialog: DialogRef, 
    private feedService: FeedService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUserById()
  }

  blockUserById() {
    console.log(this.blocked);

    this.service.blockUserById(this.post.creatorId, this.blocked)
    this.dialog.close()
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
    })
  }


}
