import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  FirebaseTSFirestore,
  Limit,
  OrderBy,
  Where,
} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { from, map, mergeMap } from 'rxjs';
import { feed } from '../models/feed';
import * as firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';
import { user } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class FeedService {
  /*   auth = new FirebaseTSAuth(); */
  firestore = new FirebaseTSFirestore();
  public usersCollection = this.store.collection<user>('users');
  private currentUser = this.authService.currentUser;
  private postsCollection = this.store.collection<feed>('Posts');
  private userId?: string;

  constructor(
    private store: AngularFirestore,
    private authService: AuthService
  ) {}

  getPosts(posts: feed[]) {
    this.firestore.getCollection({
      path: ['Posts'],
      where: [
        new Where('approved', '==', true),
        new OrderBy('date', 'desc'),
        new Limit(10),
      ],
      onComplete: (result) => {
        result.docs.forEach((doc) => {
          let post = <feed>doc.data();
          post.postId = doc.id;
          posts.push(post);
        });
      },
      onFail: (error) => {},
    });
  }

  getPostsByTrending(posts: feed[]) {
    this.firestore.getCollection({
      path: ['Posts'],
      where: [
        new Where('approved', '==', true),
        new OrderBy('tagCount', 'desc'),
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

  deletePost(postId?: string) {
    return from(this.postsCollection.doc(postId).delete());
  }

  getUser() {
    return this.currentUser.pipe(
      mergeMap((user) => {
        return this.usersCollection.doc(user?.uid).get();
      }),
      map((userDoc) => {
        this.userId = userDoc.data()?.uid;
        return userDoc.data();
      })
    );
  }

  likes(post: feed) {
    if (post.likes.includes(this.userId)) {
      console.log('teste');

      return from(
        this.postsCollection.doc(post.postId).update({
          likes: firebase.default.firestore.FieldValue.arrayRemove(this.userId),
          tagCount: post.likes.length,
        })
      );
    } else {
      return from(
        this.postsCollection.doc(post.postId).update({
          likes: firebase.default.firestore.FieldValue.arrayUnion(this.userId),
          tagCount: post.likes.length,
        })
      );
    }
  }

  comment(post: feed, commentInput: string) {
    return from(
      this.postsCollection.doc(post.postId).update({
        comments:
          firebase.default.firestore.FieldValue.arrayUnion(commentInput),
      })
    );
  }
}
