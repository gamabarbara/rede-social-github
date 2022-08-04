import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioPagesComponent } from './pages/usuario-pages/usuario-pages.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
