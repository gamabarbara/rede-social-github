import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { gitUser } from '../../models/gitUser';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-usuario-pages',
  templateUrl: './usuario-pages.component.html',
  styleUrls: ['./usuario-pages.component.css']
})
export class UsuarioPagesComponent implements OnInit {

  userName: string = ""
  userInfos?: gitUser

  constructor(private servicesService: ServicesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['name']
    console.log(this.userName)
    this.getUser()
  }

  getUser(): void {
    this.servicesService.getUserByName(this.userName).subscribe(
      (a) => {
        console.log(a)
        this.userInfos = a
        console.log(this.userInfos?.login)

      }
    )
  }

}