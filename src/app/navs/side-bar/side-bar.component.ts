import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InviteDialogComponent } from 'src/app/feed/components/invite-dialog/invite-dialog.component';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  public username?: string

  constructor(public dialog: MatDialog,private service: ServicesService,private route: Router) {}

  ngOnInit(): void {
    this.getUsername()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InviteDialogComponent, {
      width: '400px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //location.reload()
    });
  }


  collapsed = false;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidebar() {
    this.collapsed = true;
  }

  getUsername(): void {
    this.service.getUsername().subscribe(
      (a) => {
        this.username = a
      }
    )
  }

}
