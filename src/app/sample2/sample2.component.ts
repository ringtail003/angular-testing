import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

id: number;
  name: string;
  agreement: boolean;
  gender: string;
  works = [
    { id: 'employee', label: '会社員' },
    { id: 'student', label: '学生' },
    { id: 'other', label: 'その他' },
  ];
  work: { [key: string]: string };
  note: string;

  constructor() { }

  ngOnInit() {
  }

}
