import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-sample4-2',
  templateUrl: './sample4-2.component.html',
  styleUrls: ['./sample4-2.component.css'],
  providers: [LoggerService],
})
export class Sample42Component implements OnInit {
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
