import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public name?: string
  constructor(private feedService: FeedService) { }


  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.feedService.getUser().subscribe(
      a => {
        this.name = a?.name

      }
    )
  }


}
