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

  constructor(private servicesService: ServicesService, private dialog: MatDialog,) {

  }

  ngOnInit(): void {
    this.getUser()


  }

  getUser(): void {
    this.servicesService.getUser().subscribe(
      a => {
        this.userInfos = a
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
