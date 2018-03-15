import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {
  form: FormGroup;
  name: FormControl;

  works = [
    { id: 'employee', label: '会社員' },
    { id: 'student', label: '学生' },
    { id: 'other', label: 'その他' },
  ];

  constructor() { 
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.notContainsWhiteSpaceValidator(),
      ]),
      agreement: new FormControl(false),
      gender: new FormControl('female'),
      work: new FormControl(this.works),
      note: new FormControl('note'),
    });
  }

  ngOnInit() {
  }

  notContainsWhiteSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value.match(/[\\\s?]+/)) {
        return { 'containsWhiteSpace': { value: control.value } };
      }

      return null;
    };
  }
}
