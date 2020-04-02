import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack() {
    this.router.navigate(['home']);
  }
  onParams() {
    this.router.navigate(['new'], { queryParams: {page: 1} });
  }
}
