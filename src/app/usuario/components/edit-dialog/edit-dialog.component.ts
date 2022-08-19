import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/auth/models/user';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  userName: string = ""
  userInfos?: user

  profileForm: FormGroup = this.fb.group({
    username: [''],
    name: [''],
    bio: ['']
  })

  constructor(private servicesService: ServicesService, private fb: FormBuilder, private authentication: AngularFireAuth, private dialogRef: Dialog) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.servicesService.getUser().subscribe(
      a => {
        this.profileForm.setValue({
          name: a?.name,
          username: a?.username,
          bio: a?.bio
        })
      }
    )
  }

  setUserInfos() {
    this.servicesService.setUserInfos(this.profileForm.get('bio')?.value).subscribe()
  }

  deleteUser() {
    this.authentication.signOut()
    this.servicesService.deleteUser().subscribe()
    this.dialogRef.closeAll()
    location.href = '/'

  }

}
