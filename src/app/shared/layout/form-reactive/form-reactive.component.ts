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
      pw: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {
        validator: comparePassword
      }),
      skills: this.fb.array([
        this.fb.control('')
      ]
      )
    });

  }

  onSubmit() {
    console.log(this.regFrom);
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  get skills(){
    return this.regFrom.get('skills') as FormArray;
  }

}

export function comparePassword(c: AbstractControl) {
  const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordnotmatch: true
    };
}
