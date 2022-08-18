import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './pages/homeadmin/homeadmin.component';

const routes: Routes = [
  { path:'',
  pathMatch: 'full',
  component: HomeadminComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class HomeadminRoutingModule { }
