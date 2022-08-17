import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { gitUser } from '../../models/gitUser';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  userName: string = ""
  userInfos?: gitUser
  private usersCollection = this.store.collection<gitUser>('users')

  profileForm: FormGroup = this.fb.group({
    username: [''],
    name: [''],
    bio: ['']
  })

  constructor(private servicesService: ServicesService, private route: ActivatedRoute, private fb: FormBuilder, private store: AngularFirestore) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.servicesService.getUser()
  }

  setUserInfos() {
    this.servicesService.setUserInfos()
  }




}
