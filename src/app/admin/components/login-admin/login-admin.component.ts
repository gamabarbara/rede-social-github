import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private adminService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    const { email, password } = this.loginForm.value;
    this.adminService
      .signUpWithEmailAndPassword(email, password)
      .subscribe(() => {
        this.router.navigateByUrl('/feed');
      });
  }
}
