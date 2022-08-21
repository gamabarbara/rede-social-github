import { NavsModule } from './../navs/navs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalvosRoutingModule } from './salvos-routing.module';
import { PostsSalvosComponent } from './pages/posts-salvos/posts-salvos.component';


@NgModule({
  declarations: [
    PostsSalvosComponent
  ],
  imports: [
    CommonModule,
    SalvosRoutingModule,
    NavsModule
  ]
})
export class SalvosModule { }
