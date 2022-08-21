import { NavsModule } from './../navs/navs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './pages/repos/repos.component';


@NgModule({
  declarations: [
    ReposComponent
  ],
  imports: [
    CommonModule,
    ReposRoutingModule,
    NavsModule
  ]
})
export class ReposModule { }
