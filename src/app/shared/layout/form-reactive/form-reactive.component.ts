import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, FormArray } from '@angular/forms';
import { FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
//
export class FormReactiveComponent implements OnInit {


  regFrom: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regFrom = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(10)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      skills: this.fb.array([
        this.fb.control('')
      ], [Validators.required])
    }, {
      validators: this.matchPasswords
    }
    );

  }

  onSubmit() {
    console.log(this.regFrom);
  }
  get skills() {
    return this.regFrom.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  matchPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true }
  }
  get fullName() {
    return this.regFrom.get('fullName');
  }
  get email() {
    return this.regFrom.get('emailAddress');
  }
  get password() {
    return this.regFrom.get('password');
  }
  get confirmPass() {
    return this.regFrom.get('confirmPassword');
  }
}
