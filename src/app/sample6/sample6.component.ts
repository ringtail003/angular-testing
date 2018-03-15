import { 
  Component, 
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sample6',
  templateUrl: './sample6.component.html',
  styleUrls: ['./sample6.component.css']
})
export class Sample6Component implements OnInit {
  @Input() name: string;
  @Output() greet = new EventEmitter<string>();

  click() {
    this.greet.emit(`Hello ${this.name}!`);
  }

  constructor() { }

  ngOnInit() {
  }

}
