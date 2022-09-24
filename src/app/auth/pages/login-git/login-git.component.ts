import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/feed/modal/modal.component';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login-git',
  templateUrl: './login-git.component.html',
  styleUrls: ['./login-git.component.css']
})
export class LoginGitComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }


  signInWithGithub() {
    this.authService.signInWithGitHub()
      .subscribe({
        next: response => {
          this.dialog.closeAll()
          this.router.navigateByUrl('/feed')
          this.dialog.open(ModalComponent, { disableClose: true })
        },
        error: error => {
          this.snackbar.open('Erro ao cadastrar com o GitHub', 'Ok', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      });
  }
}
