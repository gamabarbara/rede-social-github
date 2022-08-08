import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-git',
  templateUrl: './login-git.component.html',
  styleUrls: ['./login-git.component.css']
})
export class LoginGitComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  signInWithGithub() {
    this.authService.signInWithGitHub()
      .subscribe(
        data => {
          this.snackbar.open('Register complete', 'Ok', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          })

          this.router.navigateByUrl('/todos')
        },
        error => {
          this.snackbar.open('Erro ao cadastrar com o GitHub', 'Ok', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          })
        }
      )
  }
}
