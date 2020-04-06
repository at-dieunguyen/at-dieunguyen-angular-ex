import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  isLogin = false;
  constructor(private router: Router) { }
  logout() {
    this.isLogin = false;
    this.router.navigateByUrl('/')
  }
}
