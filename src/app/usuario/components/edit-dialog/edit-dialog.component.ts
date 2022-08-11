import { Component, OnInit } from '@angular/core';
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

  profileForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    username: [''],
    bio: ['', [Validators.required]]
  })

  constructor(private servicesService: ServicesService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    /* this.userName = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name']) */
    this.getUser()
    this.route.paramMap.subscribe(
      (params) => {
        console.log(params.get('name'))
      }
    )

  }

  getUser(): void {
    this.servicesService.getUserByName("Ezuros").subscribe(
      (a) => {
        console.log(a)
        this.userInfos = a
        console.log(this.userInfos?.name)
        this.profileForm.setValue({
          name: this.userInfos?.name,
          username: this.userInfos?.login,
          bio: this.userInfos?.bio

        })
      }
    )
  }
}
