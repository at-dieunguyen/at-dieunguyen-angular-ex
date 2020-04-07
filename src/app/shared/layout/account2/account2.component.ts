import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../services/authen.service';
import { ApiService, ENDPOINT } from '../../services/api.service';

@Component({
  selector: 'app-account2',
  templateUrl: './account2.component.html',
  styleUrls: ['./account2.component.scss']
})
export class Account2Component implements OnInit {

  data: any;

  constructor(
    private auth: AuthenService,
    private apiSer: ApiService
  ) { }

  ngOnInit(): void {
    this.apiSer.get(ENDPOINT.users, {page: 2}).subscribe(e => {
      // console.log(e);
      this.data = e.data;
    });
    this.apiSer.getAssets('../../../../assets/events.json').subscribe(e => {
      console.log(e);
    });
    this.apiSer.get(ENDPOINT.users).subscribe(e => {
      // console.log(e);
      // this.data = e.data;
    });
  }

  logout(){
    this.auth.logout();
  }
}
