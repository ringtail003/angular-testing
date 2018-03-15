import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';
import { Sample42Component } from './sample4-2/sample4-2.component';
import { Sample6Component } from './sample6/sample6.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    Sample4Component,
    Sample42Component,
    Sample6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoggerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
