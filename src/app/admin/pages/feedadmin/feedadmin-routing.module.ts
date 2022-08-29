import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedadminComponent } from './feedadmin.component';

const routes: Routes = [
  {
    path: '',
    component: FeedadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedadminRoutingModule { }
