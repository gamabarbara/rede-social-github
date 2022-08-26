import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ServicesService } from '../admin/services/services.service';

@Injectable({
  providedIn: 'root'
})
export class AccessAdminGuard implements CanActivate {
  constructor(
    private servicesServices: ServicesService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.servicesServices.currentUser.pipe(
      map(user => {

        if (user == null) {
          return this.router.parseUrl('/admin')
        }
        return true;
      })
    )
  }
}
