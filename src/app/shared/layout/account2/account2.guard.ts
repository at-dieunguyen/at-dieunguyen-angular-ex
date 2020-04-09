import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from '../../services/authen.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard2 implements CanActivate {
  constructor(
    private authen: AuthenService,
    private router: Router
    ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  checkLogin() {
    if (!this.authen.isLogin) {
      this.router.navigateByUrl('/')
    }
    return this.authen.isLogin;
  }
}
