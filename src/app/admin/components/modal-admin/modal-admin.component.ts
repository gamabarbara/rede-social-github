import { Component, Inject, OnInit } from '@angular/core';
import { user } from 'src/app/auth/models/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { feed } from 'src/app/feed/models/feed';
import { ServicesService } from '../../services/services.service';
import { DialogRef } from '@angular/cdk/dialog';

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

  constructor(private service: ServicesService, @Inject(MAT_DIALOG_DATA) public post: feed, private dialog: DialogRef) { }

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


}
