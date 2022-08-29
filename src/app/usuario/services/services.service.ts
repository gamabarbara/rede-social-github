import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, map, mergeMap, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/auth/services/auth.service';
import { user } from 'src/app/auth/models/user';
import { Repositories } from '../models/repositories';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly url: string = "https://api.github.com/users"
  private usersCollection = this.store.collection<user>('users')
  private currentUser = this.authService.currentUser

  constructor(
    private store: AngularFirestore,
    private authService: AuthService, private http: HttpClient) { }

  getUserRepos(userName?: string): Observable<Repositories[]> {
    return this.http.get<Repositories[]>(`${this.url}/${userName}/repos`)
  }

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

  getUsername() {
    return this.currentUser.pipe(
      mergeMap(user => {
        return this.usersCollection.doc(user?.uid).get()
      }),
      map(userDoc => {
        return userDoc.data()?.username
      })
    )
  }

  setUserInfos(bio: string) {
    return this.getUser().pipe(
      mergeMap(user => {
        return this.usersCollection.doc(user?.uid).update(
          {
            uid: user?.uid as string,
            photoURL: user?.photoURL as string,
            username: user?.username as string,
            name: user?.name as string,
            bio: bio,
            email: user?.email as string,
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

