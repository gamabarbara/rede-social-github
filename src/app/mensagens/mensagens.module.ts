import { NavsModule } from './../navs/navs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagensRoutingModule } from './mensagens-routing.module';
import { MensagensComponent } from './pages/mensagens/mensagens.component';
import { ChatComponent } from './chat/chat.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../shared/services/chat.service';



@NgModule({
  declarations: [
    MensagensComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    MensagensRoutingModule,
    NavsModule,
    MaterialModule,
    FormsModule,

  ],
  providers: [
    ChatService
  ]
})
export class MensagensModule { }
