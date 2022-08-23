import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './homeadmin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeadminComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class HomeadminRoutingModule { }
