import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministracaoComponent } from './pages/administracao/administracao.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeadminComponent } from './pages/homeadmin/homeadmin.component';
import { NavsModule } from '../navs/navs.module';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { ConfirmarAprovacaoComponent } from './components/confirmar-aprovacao/confirmar-aprovacao.component';
import { ConfirmarDelecaoComponent } from './components/confirmar-delecao/confirmar-delecao.component';




@NgModule({
  declarations: [
    AdministracaoComponent,
    LoginAdminComponent,
    HomeadminComponent,
    ConfirmarAprovacaoComponent,
    ConfirmarDelecaoComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
    NavsModule



  ]
})
export class AdminModule { }
