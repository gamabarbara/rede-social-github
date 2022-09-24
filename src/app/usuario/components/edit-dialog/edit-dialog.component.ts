import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  userName: string = "";
  userInfos?: user;

  profileForm: FormGroup = this.fb.group({
    username: [''],
    name: [''],
    bio: ['']
  })

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private authentication: AngularFireAuth,
    private dialogRef: Dialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userService.getUser().subscribe(
      a => {
        this.profileForm.setValue({
          name: a?.name,
          username: a?.username,
          bio: a?.bio
        });
      }
    )
  }

  setUserInfos() {
    this.userService.setUserInfos(this.profileForm.get('bio')?.value).subscribe({
      next: (res) => {
        this.dialogRef.closeAll()
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/user/:user']);
        });
      }
    })
  }

  deleteUser() {
    this.authentication.signOut();
    this.userService.deleteUser().subscribe();
    this.dialogRef.closeAll();
    location.href = '/'
  }
}
