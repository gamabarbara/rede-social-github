import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FeedService } from 'src/app/shared/services/feed.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-invite-dialog',
  templateUrl: './invite-dialog.component.html',
  styleUrls: ['./invite-dialog.component.css']
})
export class InviteDialogComponent implements OnInit {

  public username?: string
  constructor(private service: FeedService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.service.getUser().subscribe((a : any)=> {
      this.username = a?.username
    })
  }
}
