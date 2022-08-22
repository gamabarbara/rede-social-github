import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministracaoComponent } from './pages/administracao/administracao.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeadminComponent } from './pages/homeadmin/homeadmin.component';
import { ConfirmarLogoutComponent } from './confirmar-logout/confirmar-logout.component';


@NgModule({
  declarations: [
    AdministracaoComponent,
    LoginAdminComponent,
    HomeadminComponent,
    ConfirmarLogoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule, 
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
