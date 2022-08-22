import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, map, mergeMap, Observable } from 'rxjs';
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
  signOut: any;

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

  setUserInfos(bio: string) {
    return this.getUser().pipe(
      mergeMap(user => {
        return this.usersCollection.doc(user?.uid).set(
          {
            uid: user?.uid as string,
            photoURL: user?.photoURL as string,
            username: user?.username as string,
            name: user?.name as string,
            bio: bio,
            email: user?.email as string,
            posts: []
          }
        )
      })
    )
  }

  deleteUser() {
    return this.currentUser.pipe(
      mergeMap(user => {
        return this.usersCollection.doc(user?.uid).delete()
      })
    )
  }
}

