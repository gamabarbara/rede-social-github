import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: PostData[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
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
              let post = <PostData>doc.data();
              this.posts.push(post);
            }
          )
        },
        onFail: error => {

        }
      }
    )
  } 

}

export interface PostData {
  comment: string;
  creatorId: string;
  imageUrl?: string;
  photoProfile: string;
  userName: string;

}
