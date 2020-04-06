import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../services/authen.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private auth: AuthenService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }
}
