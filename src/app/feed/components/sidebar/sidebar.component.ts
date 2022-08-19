import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InviteDialogComponent } from '../invite-dialog/invite-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InviteDialogComponent, {
      width: '400px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      location.reload()
    });
  }



  collapsed = false;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidebar() {
    this.collapsed = false;
  }

}


