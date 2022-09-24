import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessAdminGuard implements CanActivate {
  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.currentUser.pipe(
      map(user => {

        if (user == null) { // aqui está testando apenas se o usuário está logado
          return this.router.parseUrl('/admin')
        }
        return true;
      })
    )
  }
}
