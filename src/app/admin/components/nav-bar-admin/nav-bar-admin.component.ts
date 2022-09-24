import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut()
  }
}
