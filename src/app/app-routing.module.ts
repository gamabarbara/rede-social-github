import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundModule } from './not-found/not-found.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user/:name',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'trend',
    loadChildren: () => import('./feed/components/trending/trending.module').then(m => m.TrendingModule)
  },

  {
    path: '404', component: NotFoundModule
  },
  {
    path: 'error404',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./admin/pages/homeadmin/homeadmin.module').then(m => m.HomeadminModule)

  },

  {
    path: 'user/:name/repos',
    loadChildren: () => import('./repos/repos.module').then(m => m.ReposModule)
  },

  {
    path: 'user/:name/posts-savos',
    loadChildren: () => import('./salvos/salvos.module').then(m => m.SalvosModule)
  },
  {
    path: 'user/:name/mensagens',
    loadChildren: () => import('./mensagens/mensagens.module').then(m => m.MensagensModule)
  },
  {
    path: 'admin/feed',
    loadChildren: () => import('./admin/pages/feedadmin/feedadmin.module').then(m => m.FeedadminModule)
  },
  {
    path: 'convite/:name',
    redirectTo: '/'
  },
  {
    path: '**', redirectTo: '/error404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
