import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatIconModule
  ]
})
export class PrincipalModule { }
