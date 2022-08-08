import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../auth/auth.module';
import { LoginGitComponent } from '../auth/pages/login-git/login-git.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    SideBarComponent
  ]
})
export class NavsModule { }
