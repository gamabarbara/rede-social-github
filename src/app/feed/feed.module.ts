import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from '../material/material.module';
import { FeedComponent } from './pages/feed/feed.component';
import { NavsModule } from '../navs/navs.module';



@NgModule({
  declarations: [
    SidebarComponent,
    CardsComponent,
    CardsComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule,
    NavsModule
  ]
})
export class FeedModule { }
