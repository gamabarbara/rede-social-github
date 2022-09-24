import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Repositories } from 'src/app/shared/models/repositories';
import { user } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { EditDialogComponent } from '../../components/edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-usuario-pages',
  templateUrl: './usuario-pages.component.html',
  styleUrls: ['./usuario-pages.component.css']
})
export class UsuarioPagesComponent implements OnInit {

  userName: string = ""
  userInfos?: user;
  userRepositories: Repositories[] = []
  displayedColumns: string[] = ['name', 'description', 'language', 'created_at'];

  constructor(private userService: UserService, private dialog: MatDialog,) {

  }

  ngOnInit(): void {
    this.getUserInfos()
  }

  getUserInfos(): void {
    this.userService.getUser().subscribe(
      a => {
        this.userInfos = a
        this.userService.getUserRepos(this.userInfos?.username).subscribe(
          b => {
            this.userRepositories = b
          }
        )
      }
    )
  }

  getUserRepos() {

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(EditDialogComponent, {
      width: '400px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
