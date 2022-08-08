import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';import { Router } from '@angular/router';
import { GithubAuthProvider } from 'firebase/auth'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authentication: AngularFireAuth,
  ) { }
  signInWithGitHub() {
    const githubProvider = new GithubAuthProvider()

    return from(this.authentication.signInWithPopup(githubProvider))
    .pipe(

    )
  }
}
