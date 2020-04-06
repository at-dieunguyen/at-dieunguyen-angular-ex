import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isTyping = false;

  constructor(
    private activate: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activate.snapshot.data['userData']);
  }

  onType(){
    this.isTyping = true;
    console.log(this.isTyping);
  }

}
