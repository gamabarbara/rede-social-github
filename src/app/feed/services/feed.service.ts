import { Injectable } from '@angular/core';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  firestore = new FirebaseTSFirestore();
  /* posts: feed[] = []; */
  constructor() { }

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
}


