import { Component, OnInit } from '@angular/core';
import { feed } from '../../models/feed';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  constructor(private service: FeedService) { }

  ngOnInit(): void {
  }

  comment(post: feed, comment: string) {
    return this.service.comment(post, comment).subscribe()
  }

}
