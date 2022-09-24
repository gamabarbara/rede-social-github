import { Component, OnInit, Type } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  selectedImageFile!: File;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();
  date = new Date().toLocaleString('pt-BR');
  selectedVideoFile!: File;

  constructor(private dialog: MatDialogRef<CreatePostComponent>) { }

  ngOnInit(): void { }

  onPostClick(
    commentInput: HTMLTextAreaElement,
    titleInput: HTMLTextAreaElement
  ) {
    let comment = commentInput.value;
    let title = titleInput.value;
    if (comment.length <= 0 || title.length <= 0) return;
    if (this.selectedImageFile) {
      this.uploadImagePost(comment, title);
    }
    if (this.selectedVideoFile) {
      this.uploadVideoPost(comment, title);
    } else {
      return;
    }
  }

  uploadImagePost(description: string, title: string) {
    let postId = this.firestore.genDocId();

    this.storage.upload(
      {
        uploadName: "upload Image Post",
        path: ["Posts", postId, "image"],
        data: {
          data: this.selectedImageFile
        },
        onComplete: (downloadURL) => {
          this.firestore.create(
            {
              path: ["Posts", postId],
              data: {
                description: description,
                creatorId: this.auth.getAuth().currentUser?.uid,
                creatorName: this.auth.getAuth().currentUser?.displayName,
                creatorPhoto: this.auth.getAuth().currentUser?.photoURL,
                imageUrl: downloadURL,
                videoUrl: '',
                date: this.date,
                postId: postId,
                approved: false,
                likes: [],
                comments: [],
                tagCount: 0

              },
              onComplete: (docId) => {
                this.dialog.close();
                location.reload()
              }
            }
          );
        }
      }
    );

    this.storage.upload({
      uploadName: 'upload Image Post',
      path: ['Posts', postId, 'image'],
      data: {
        data: this.selectedImageFile,
      },
      onComplete: (downloadURL) => {
        this.firestore.create({
          path: ['Posts', postId],
          data: {
            description: description,
            creatorId: this.auth.getAuth().currentUser?.uid,
            creatorName: this.auth.getAuth().currentUser?.displayName,
            creatorPhoto: this.auth.getAuth().currentUser?.photoURL,
            imageUrl: downloadURL,
            videoUrl: '',
            date: this.date,
            postId: postId,
            approved: false,
            likes: [],
            comments: [],
            tagCount: 0,
            title: title,
          },
          onComplete: (docId) => {
            this.dialog.close();
            location.reload();
          },
        });
      },
    });

  }

  uploadVideoPost(description: string, title: string) {
    let postId = this.firestore.genDocId();

    this.storage.upload(
      {
        uploadName: "upload video Post",
        path: ["Posts", postId, "video"],
        data: {
          data: this.selectedVideoFile
        },
        onComplete: (downloadURL) => {
          this.firestore.create(
            {
              path: ["Posts", postId],
              data: {
                description: description,
                creatorId: this.auth.getAuth().currentUser?.uid,
                creatorName: this.auth.getAuth().currentUser?.displayName,
                creatorPhoto: this.auth.getAuth().currentUser?.photoURL,
                imageUrl: '',
                videoUrl: downloadURL,
                date: this.date,
                postId: postId,
                approved: false,
                likes: [],
                comments: [],
                tagCount: 0,
                title: title


              },
              onComplete: (docId) => {
                this.dialog.close();
                location.reload()
              }
            }
          );
        }
      }
    );

    this.storage.upload({
      uploadName: 'upload video Post',
      path: ['Posts', postId, 'video'],
      data: {
        data: this.selectedVideoFile,
      },
      onComplete: (downloadURL) => {
        this.firestore.create({
          path: ['Posts', postId],
          data: {
            description: description,
            creatorId: this.auth.getAuth().currentUser?.uid,
            creatorName: this.auth.getAuth().currentUser?.displayName,
            creatorPhoto: this.auth.getAuth().currentUser?.photoURL,
            imageUrl: '',
            videoUrl: downloadURL,
            date: this.date,
            postId: postId,
            approved: false,
            likes: [],
            comments: [],
            tagCount: 0,
            title: title,
          },
          onComplete: (docId) => {
            this.dialog.close();
            location.reload();
          },
        });
      },
    });
  }

  onPhotoSelected(photoSelector: HTMLInputElement) {
    this.selectedImageFile = photoSelector.files![0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener('loadend', (ev) => {
      let readableString = fileReader.result?.toString();
      let postPreviewImage: any = <HTMLImageElement>(
        document.getElementById('post-preview-image')
      );
      postPreviewImage.src = readableString;
    });
  }

  onSelectFile(videoSeletor: HTMLInputElement) {
    this.selectedVideoFile = videoSeletor.files![0];
    if (!this.selectedVideoFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedVideoFile);
    fileReader.addEventListener(
      "loadend",
      ev => {
        let readableString = fileReader.result?.toString();
        let postPreviewVideo: any = <HTMLInputElement>document.getElementById("post-preview-video");
        //postPreviewVideo.src = readableString  

      }
    )
    fileReader.addEventListener('loadend', (ev) => {
      let readableString = fileReader.result?.toString();
      let postPreviewVideo: any = <HTMLInputElement>(
        document.getElementById('post-preview-video')
      );
      //postPreviewVideo.src = readableString
    });
  }
}
