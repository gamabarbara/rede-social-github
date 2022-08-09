import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from '../material/material.module';
import { FeedComponent } from './pages/feed/feed.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CardsComponent,
    NavbarComponent,
    CardsComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule
  ]
})
export class FeedModule { }
