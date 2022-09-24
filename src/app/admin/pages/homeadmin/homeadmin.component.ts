
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarLogoutComponent } from 'src/app/navs/nav-bar/confirmar-logout/confirmar-logout.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmarAprovacaoComponent } from '../../components/confirmar-aprovacao/confirmar-aprovacao.component';
import { ConfirmarDelecaoComponent } from '../../components/confirmar-delecao/confirmar-delecao.component';
import { ModalAdminComponent } from '../../components/modal-admin/modal-admin.component';
import { feed } from 'src/app/shared/models/feed';
import { PostService } from 'src/app/shared/services/post.service';


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
    private service: PostService,
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
              this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.route.navigate(['/homeadmin']);
            }); 
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
              this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.route.navigate(['/homeadmin']);
            }); 
            }
          })
        }
      }
    )
  }

openUserInfo(post: feed) {
  this.dialog.open(ModalAdminComponent, { data: post })
}
}
