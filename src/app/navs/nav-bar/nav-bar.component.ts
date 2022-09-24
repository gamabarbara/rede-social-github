import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SideService } from 'src/app/shared/services/side.service';
import { ConfirmarLogoutComponent } from './confirmar-logout/confirmar-logout.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public photo?: string
  public username?: string

  constructor(
    private dialog: MatDialog,
    private service: SideService,
    private route: Router) { }

  ngOnInit(): void {
    this.getUserPhoto()
    this.getUsername()
  }

  signOut(): void {
    const dialogRef = this.dialog.open(ConfirmarLogoutComponent)
    dialogRef.afterClosed().subscribe(
      (a) => {
        if (a === true) {
          this.service.signOut()
          this.route.navigate(['/'])
        }
      }
    )
  }
  getUserPhoto(): void {
    this.service.getUserPhoto().subscribe(
      (a) => {
        this.photo = a
      }
    )
  }
  getUsername(): void {
    this.service.getUsername().subscribe(
      (a) => {
        this.username = a
      }
    )
  }
}
