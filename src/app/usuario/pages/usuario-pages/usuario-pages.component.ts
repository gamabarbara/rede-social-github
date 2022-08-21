import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/auth/models/user';
import { EditDialogComponent } from '../../components/edit-dialog/edit-dialog.component';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-usuario-pages',
  templateUrl: './usuario-pages.component.html',
  styleUrls: ['./usuario-pages.component.css']
})
export class UsuarioPagesComponent implements OnInit {

  userName: string = ""
  userInfos?: user
  public username?: string

  constructor(private servicesService: ServicesService, private dialog: MatDialog, ) {

  }

  ngOnInit(): void {
    this.getUser()
    this.getUsername()

  }

  getUser(): void {
    this.servicesService.getUser().subscribe(
      a => {
        this.userInfos = a
      }
    )
  }

  getUsername(): void {
    this.servicesService.getUsername().subscribe(
      (a) => {
        this.username = a
      }
    )
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
