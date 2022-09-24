import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessFeedGuard } from 'src/app/shared/guards/access-feed.guard';
import { TrendingComponent } from './pages/trending/trending.component';

const routes: Routes = [
  {
    path: '',
    component: TrendingComponent,
    canActivate: [
      AccessFeedGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule { }
