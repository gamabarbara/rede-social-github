import { Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogPrincipalComponent } from '../dialog-principal/dialog-principal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogPrincipalComponent, {
      width: '400px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
