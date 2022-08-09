import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DialogPrincipalComponent } from './components/dialog-principal/dialog-principal.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DialogPrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatIconModule
  ]
})
export class PrincipalModule { }
