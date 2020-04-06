import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../services/authen.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login() {
    this.auth.isLogin = true;
    this.router.navigateByUrl('account')
    // console.log(this.auth.isLogin)
  }

}
