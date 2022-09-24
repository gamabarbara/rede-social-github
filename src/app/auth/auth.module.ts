import { NavsModule } from './../navs/navs.module';
import { MaterialModule } from '../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginGitComponent } from './pages/login-git/login-git.component';

@NgModule({
  declarations: [
    LoginGitComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NavsModule
  ]
})
export class AuthModule { }
