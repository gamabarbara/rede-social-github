import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioPagesComponent } from './pages/usuario-pages/usuario-pages.component';
import { NavsModule } from '../navs/navs.module';
import { MaterialModule } from '../shared/material/material.module';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioPagesComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NavsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
