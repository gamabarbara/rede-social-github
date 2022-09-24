import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FeedComponent } from './pages/feed/feed.component';
import { NavsModule } from '../navs/navs.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostComponent } from './components/post/post.component';
import { ReplyComponent } from './components/reply/reply.component';
import { InviteDialogComponent } from './components/invite-dialog/invite-dialog.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    FeedComponent,
    PostFeedComponent,
    CreatePostComponent,
    PostComponent,
    ReplyComponent,
    InviteDialogComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule,
    NavsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class FeedModule { }



