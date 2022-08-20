import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  selectedImageFile!: File;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();
  url!: string | ArrayBuffer | null;
  format!: string;
  constructor(private dialog: MatDialogRef<CreatePostComponent>) { }

  ngOnInit(): void {
  }

  onPostClick(commentInput: HTMLTextAreaElement) {
    console.log(this.selectedImageFile)
    let comment = commentInput.value;
    if (comment.length <= 0) return;
    if (this.selectedImageFile) {
      this.uploadImagePost(comment);
    }
  }

  uploadImagePost(comment: string) {
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
                comment: comment,
                creatorId: this.auth.getAuth().currentUser?.uid,
                creatorName: this.auth.getAuth().currentUser?.displayName,
                creatorPhoto: this.auth.getAuth().currentUser?.photoURL,
                imageUrl: downloadURL,
                timestamp: FirebaseTSApp.getFirestoreTimestamp()
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
  }

  onPhotoSelected(photoSelector: HTMLInputElement) {
    this.selectedImageFile = photoSelector.files![0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener(
      "loadend",
      ev => {
        let readableString = fileReader.result?.toString();
        let postPreviewImage: any = <HTMLImageElement>document.getElementById("post-preview-image");
        postPreviewImage.src = readableString;
      }
    )
  }

  onSelectFile(event:any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }



}
