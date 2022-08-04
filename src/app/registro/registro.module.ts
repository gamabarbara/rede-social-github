import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';
import { ModelsComponent } from './models/models.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    PagesComponent,
    ModelsComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
