import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { from, map, mergeMap } from 'rxjs';
import { user } from 'src/app/auth/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
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

  deletePost(postId?: string) {

    return from(this.postsCollection.doc(postId).delete());


    /* return from(this.postsCollection.ref.where('postId', '==', 'qmoMqrmfVisevur0GQo9').get())
      .pipe(
        
      )
  } */
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

