import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioPagesComponent } from './pages/usuario-pages/usuario-pages.component';


@NgModule({
  declarations: [
    UsuarioPagesComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
