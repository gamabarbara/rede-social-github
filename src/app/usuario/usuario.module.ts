import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioPagesComponent } from './pages/usuario-pages/usuario-pages.component';
import { NavsModule } from '../navs/navs.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    UsuarioPagesComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NavsModule,
    MaterialModule
  ]
})
export class UsuarioModule { }
