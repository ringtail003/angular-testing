import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  id: number;
  name: string;
  gender: string;
  agreement: boolean;

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
