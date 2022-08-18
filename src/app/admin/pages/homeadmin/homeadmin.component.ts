import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent   {

  collapsed = false;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidebar() {
    this.collapsed = false;
  }


}
