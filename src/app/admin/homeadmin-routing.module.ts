import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from '../feed/pages/feed/feed.component';
import { HomeadminComponent } from './pages/homeadmin/homeadmin.component';

const routes: Routes = [
  { path:'',
    component: HomeadminComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class HomeadminRoutingModule { }
