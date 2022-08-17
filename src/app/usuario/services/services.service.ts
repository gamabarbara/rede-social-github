import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, mergeMap, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/auth/services/auth.service';
import { user } from 'src/app/auth/models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private usersCollection = this.store.collection<user>('users')
  private currentUser = this.authService.currentUser

  constructor(private authentication: AngularFireAuth,
    private store: AngularFirestore,
    private authService: AuthService) { }


  getUser() {
    return this.currentUser.pipe(
      mergeMap(user => {
        return this.usersCollection.doc(user?.uid).get()
      }),
      map(userDoc => {
        return userDoc.data()
      })
    )
  }

  setUserInfos() {
    console.log(this.usersCollection.doc());


  }
}
