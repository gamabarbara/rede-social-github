import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore, Limit, OrderBy, Where } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { from, tap } from 'rxjs';
import { admin } from 'src/app/admin/models/admin';
import { user } from 'src/app/auth/models/user';
import { feed } from 'src/app/feed/models/feed';


@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private userCollection = this.store.collection<user>('users');
  private adminCollection = this.store.collection<admin>('admin');
  private postsCollection = this.store.collection<feed>('Posts');
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();

  constructor(
    private authentication: AngularFireAuth,
    private store: AngularFirestore
  ) { }

  get currentUser() {
    return this.authentication.authState
  }

  signOut() {
    this.authentication.signOut();
  }

  signUpWithEmailAndPassword(email: string, password: string) {
    return from(
      this.authentication.createUserWithEmailAndPassword(email, password)
    );
  }


  getPosts(posts: feed[]) {
    this.firestore.getCollection(
      {
        path: ["Posts"],
        where: [
          new OrderBy("date", "desc"),
          new Where("approved", "==", false),
          new Limit(10)
        ],
        onComplete: (result) => {

          result.docs.forEach(
            doc => {
              let post = <feed>doc.data();
              posts.push(post);

            }
          )
        },
        onFail: error => {
        }
      }
    )
  }
  approvePosts(post: feed) {
    return from(this.postsCollection.doc(post.postId).update(
      {
        approved: true
      }
    )
    )
  }

  deletePost(postId?: string) {
    return from(this.postsCollection.doc(postId).delete());
  }

  getUserById(userId: string) {
    return this.userCollection.doc(userId).get()
  }

}
