import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public photo?: string
  public username?: string

  constructor(private dialog: MatDialog, private service: ServicesService) { }

  ngOnInit(): void {
    this.getUserPhoto()
    this.getUsername()
  }

  signOut(): void {
    this.service.signOut().subscribe()
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
