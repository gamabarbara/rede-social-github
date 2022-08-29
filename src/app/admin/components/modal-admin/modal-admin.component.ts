import { Component, Inject, OnInit } from '@angular/core';
import { user } from 'src/app/auth/models/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { feed } from 'src/app/feed/models/feed';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.css']
})
export class ModalAdminComponent implements OnInit {
  userInfos?: user;
  public postUser?: feed;
  public username?: string;

  constructor(private service: ServicesService,  @Inject(MAT_DIALOG_DATA) public post: feed,) { }

  ngOnInit(): void {
/*     this.getUserById(); */

  }

  /* getUserById() {
    const data = this.service.getUserById(this.post.creatorId).subscribe((a) => {
      
    })
  
  } */


}
