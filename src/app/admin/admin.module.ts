import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministracaoComponent } from './pages/administracao/administracao.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdministracaoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule


  ]
})
export class AdminModule { }
