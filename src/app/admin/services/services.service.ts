import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { from, tap } from 'rxjs';
import { admin } from 'src/app/admin/models/admin';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private adminCollection = this.store.collection<admin>('admin');

  constructor(
    private authentication: AngularFireAuth,
    private store: AngularFirestore,
    private authService: AuthService) { }
  

  signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    return from(this.authentication.signInWithPopup(googleProvider)).pipe(
      tap((credentials) => {
        const uid = credentials.user?.uid as string;

        const photoURL = credentials.user?.photoURL as string;
        const email = credentials.user?.email as string;

        this.adminCollection.doc(uid).set({
          uid: uid,
          photoURL: photoURL,
          email: email,
        });
      })
    );
  }

  signOut() {
    return from(this.authentication.signOut())
  }



  signUpWithEmailAndPassword(email: string, password: string) {
    return from(
      this.authentication.createUserWithEmailAndPassword(email, password)
    );
  }

 
}
