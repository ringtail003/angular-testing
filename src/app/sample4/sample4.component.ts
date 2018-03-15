import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-sample4',
  templateUrl: './sample4.component.html',
  styleUrls: ['./sample4.component.css'],
})
export class Sample4Component implements OnInit {
  log: string;

  constructor(
    private logger: LoggerService,
  ) { }

  write() {
    this.log = this.logger.log();
  }

  ngOnInit() {
  }

}
