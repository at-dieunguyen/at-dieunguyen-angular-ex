import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  fullName = '';
  emailAdress = '';

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(form: NgForm) {
    console.log(form);
  }
}
