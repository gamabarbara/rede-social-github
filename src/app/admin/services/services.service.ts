import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { from, tap } from 'rxjs';
import { admin } from 'src/app/admin/models/admin';
import { feed } from 'src/app/feed/models/feed';


@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private adminCollection = this.store.collection<admin>('admin');
  private postsCollection = this.store.collection<feed>('Posts');
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  constructor(
    private authentication: AngularFireAuth,
    private store: AngularFirestore
  ) { }

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
    this.authentication.signOut();
  }

  signUpWithEmailAndPassword(email: string, password: string) {
    return from(
      this.authentication.createUserWithEmailAndPassword(email, password)
    );
  }

  getPosts(posts: feed[]) { //tirei o array dessa classe e passei como parametro, pra chamar o novo array pelo post.ts
    this.firestore.getCollection(
      {
        path: ["Posts"],
        where: [
          new OrderBy("timestamp", "desc"),
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
    return from(this.postsCollection.doc(post.postId).set(
      {
        comment: post.comment,
        creatorId: post.creatorId,
        creatorPhoto: post.creatorPhoto,
        creatorName: post.creatorName,
        timestamp: 'oi',
        imageUrl: post.imageUrl,
        likes: post.likes,
        postId: post.postId,
        approved: 'true'
      }
    )
    )
  }

  deletePost(postId?: string) {
    return from(this.postsCollection.doc(postId).delete());
  }
}
