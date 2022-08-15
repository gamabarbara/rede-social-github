import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministracaoComponent } from './pages/administracao/administracao.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';


@NgModule({
  declarations: [
    AdministracaoComponent,
    LoginAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule


  ]
})
export class AdminModule { }
