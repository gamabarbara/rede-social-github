import { ServicesService } from 'src/app/admin/services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarLogoutComponent } from 'src/app/navs/nav-bar/confirmar-logout/confirmar-logout.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent   {


  constructor(
    private dialog: MatDialog,
    private service: ServicesService,
    private route: Router) { }

  collapsed = false;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidebar() {
    this.collapsed = false;
  }
  
  signOut(): void {
    const dialogRef = this.dialog.open(ConfirmarLogoutComponent)
    dialogRef.afterClosed().subscribe(
      (a) => {
        if (a === true) {
          this.service.signOut()
          this.route.navigate(['/admin'])
        }
      }
    )
  }

}
