
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGitComponent } from './pages/login-git/login-git.component';

const routes: Routes = [
  {
    path: '',
    component: LoginGitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
