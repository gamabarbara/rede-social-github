import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore, Limit, OrderBy, Where } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { from, map, mergeMap } from 'rxjs';
import { user } from 'src/app/auth/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  private usersCollection = this.store.collection<user>('users')
  private currentUser = this.authService.currentUser
  private postsCollection = this.store.collection<feed>('Posts')

  constructor(private store: AngularFirestore,
    private authService: AuthService) { }

  getPosts(posts: feed[]) { //tirei o array dessa classe e passei como parametro, pra chamar o novo array pelo post.ts
    this.firestore.getCollection(
      {
        path: ["Posts"],
        where: [
          new Where("approved", "==", "true"),
          new OrderBy("timestamp", "desc"),
          new Limit(10)
        ],
        onComplete: (result) => {
          console.log(result);

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

  /* editPost() {
    this.firestore.update(
      {
        path: ["Posts", postId],
        data: {
          comment: comment,
          creatorId: this.auth.getAuth().currentUser?.uid,
          creatorName: this.auth.getAuth().currentUser?.displayName,
          creatorPhoto: this.auth.getAuth().currentUser?.photoURL,
          imageUrl: downloadURL,
          timestamp: FirebaseTSApp.getFirestoreTimestamp(),
          postId: postId,
          approved: 'false'

        }
      }
    )
  } */


  deletePost(postId?: string) {
    return from(this.postsCollection.doc(postId).delete());
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
}

