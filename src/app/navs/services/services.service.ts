import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private authentication: AngularFireAuth,
    private router: Router) { }

  signOut() {
    return from(this.authentication.signOut())
  }
}
