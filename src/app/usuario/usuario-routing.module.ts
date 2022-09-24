import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessFeedGuard } from '../shared/guards/access-feed.guard';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { UsuarioPagesComponent } from './pages/usuario-pages/usuario-pages.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPagesComponent,
    canActivate: [
      AccessFeedGuard
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
