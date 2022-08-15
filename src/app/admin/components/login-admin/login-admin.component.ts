import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private adminService: ServicesService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  signInWithGoogle() {
    this.adminService.signInWithGoogle()
      .subscribe(
        data => {
          /* console.log(data) */
          this.snackbar.open('Register complete', 'Ok', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',

          })
          this.dialog.closeAll()
          this.router.navigateByUrl('/feed')
        },
        error => {
          this.snackbar.open('Erro ao cadastrar com o Google', 'Ok', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          })
        }
      )
  }

}
