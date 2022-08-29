import { ServicesService } from 'src/app/admin/services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarLogoutComponent } from 'src/app/navs/nav-bar/confirmar-logout/confirmar-logout.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { feed } from 'src/app/feed/models/feed';

import { ConfirmarAprovacaoComponent } from '../../components/confirmar-aprovacao/confirmar-aprovacao.component';
import { ConfirmarDelecaoComponent } from '../../components/confirmar-delecao/confirmar-delecao.component';


@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent {
  posts: feed[] = []
  collapsed = false;


  constructor(
    private dialog: MatDialog,
    private service: ServicesService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.getPosts();
  }


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidebar() {
    this.collapsed = false;
  }

  signOut(): void {
    const dialogRef = this.dialog.open(ConfirmarLogoutComponent)
    dialogRef.afterClosed().subscribe(
      (a) => {
        if (a === true) {
          this.service.signOut()
          this.route.navigate(['/admin'])
        }
      }
    )
  }

  getPosts() {
    this.service.getPosts(this.posts)

  }

  approvePosts(post: feed) {

    const dialogRef = this.dialog.open(ConfirmarAprovacaoComponent)
    dialogRef.afterClosed().subscribe(
      (a) => {
        if (a === true) {
          this.service.approvePosts(post).subscribe({
            next: (a) => {
              location.href = '/homeadmin'
            }
          })
        }
      }
    )

  }


  deletePost(postId?: string) {
    const dialogRef = this.dialog.open(ConfirmarDelecaoComponent)
    dialogRef.afterClosed().subscribe(
      (a) => {
        if (a === true) {
          this.service.deletePost(postId).subscribe({
            next: (res) => {
              location.href = '/homeadmin'
            }
          })
        }
      }
    )
  }

}
