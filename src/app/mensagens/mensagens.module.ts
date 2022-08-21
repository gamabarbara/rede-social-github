import { NavsModule } from './../navs/navs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagensRoutingModule } from './mensagens-routing.module';
import { MensagensComponent } from './pages/mensagens/mensagens.component';


@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    CommonModule,
    MensagensRoutingModule,
    NavsModule
  ]
})
export class MensagensModule { }
