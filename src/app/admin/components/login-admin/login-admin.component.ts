import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent implements OnInit {
  firebasetsAuth: FirebaseTSAuth;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void { }

  onLogin(loginEmail: HTMLInputElement, loginPassword: HTMLInputElement) {
    let email = loginEmail.value;
    let password = loginPassword.value;

    if (loginPassword != null) {
      this.firebasetsAuth.signInWith({
        email: email,
        password: password,
        onComplete: (res) => {

          this.router.navigateByUrl('/homeadmin');
          this.dialog.closeAll();
        },
        onFail: (error) => {
          alert('Account not found');
        },
      });
    }
  }
}
