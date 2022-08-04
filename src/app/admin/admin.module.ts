import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministracaoComponent } from './pages/administracao/administracao.component';


@NgModule({
  declarations: [
    AdministracaoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,


  ]
})
export class AdminModule { }
