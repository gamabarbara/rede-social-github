import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SidebarComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule
  ]
})
export class FeedModule { }
