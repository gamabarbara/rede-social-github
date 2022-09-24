import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaterialModule } from '../shared/material/material.module';
import { ConfirmarLogoutComponent } from './nav-bar/confirmar-logout/confirmar-logout.component';




@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    ConfirmarLogoutComponent,

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
