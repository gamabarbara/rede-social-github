import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import {
  FirebaseTSFirestore,
  Limit,
  OrderBy,
  Where,
} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { from, map } from 'rxjs';
import { feed } from '../models/feed';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private userCollection = this.store.collection<any>('users');
  private postsCollection = this.store.collection<feed>('Posts');
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();

  constructor(
    private authentication: AngularFireAuth,
    private store: AngularFirestore
  ) {}

  get currentUser() {
    return this.authentication.authState;
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
    this.firestore.getCollection({
      path: ['Posts'],
      where: [
        new OrderBy('date', 'desc'),
        new Where('approved', '==', false),
        new Limit(10),
      ],
      onComplete: (result) => {
        result.docs.forEach((doc) => {
          let post = <feed>doc.data();
          posts.push(post);
        });
      },
      onFail: (error) => {},
    });
  }
  approvePosts(post: feed) {
    return from(
      this.postsCollection.doc(post.postId).update({
        approved: true,
      })
    );
  }

  deletePost(postId?: string) {
    return from(this.postsCollection.doc(postId).delete());
  }

  blockUserById(userId: string, blocked: boolean) {
    if (blocked === false) {
      return this.userCollection.doc(userId).update({
        blocked: true,
      });
    } else {
      return this.userCollection.doc(userId).update({
        blocked: false,
      });
    }
  }

  getUserById(userId: string) {
    return this.userCollection
      .doc(userId)
      .get()
      .pipe(
        map((a) => {
          return a.data();
        })
      );
  }
}
