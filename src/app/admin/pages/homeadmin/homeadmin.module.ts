import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeadminRoutingModule } from './homeadmin-routing.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from 'src/app/navs/nav-bar/nav-bar.component';
import { NavsModule } from 'src/app/navs/navs.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeadminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NavsModule, 
  ]
})
export class HomeadminModule { }
