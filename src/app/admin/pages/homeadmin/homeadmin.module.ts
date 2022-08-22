import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavsModule } from '../../../navs/navs.module';
import { HomeadminRoutingModule } from './homeadmin-routing.module';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeadminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ]
})
export class HomeadminModule { }
