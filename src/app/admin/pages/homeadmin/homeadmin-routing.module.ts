import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessAdminGuard } from 'src/app/shared/guards/access-admin.guard';
import { HomeadminComponent } from './homeadmin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeadminComponent,
    canActivate: [
      AccessAdminGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class HomeadminRoutingModule { }
