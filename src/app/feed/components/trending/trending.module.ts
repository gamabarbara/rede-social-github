import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingComponent } from './pages/trending/trending.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavsModule } from 'src/app/navs/navs.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FeedModule } from '../../feed.module';


@NgModule({
  declarations: [
    TrendingComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    MaterialModule,
    NavsModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class TrendingModule { }
