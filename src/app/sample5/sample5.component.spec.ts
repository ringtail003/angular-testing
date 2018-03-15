import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Sample4Component } from '../sample4/sample4.component';
import { Sample5Component } from './sample5.component';
import { LoggerService } from '../logger.service';

/**
 * ネストしたコンポーネントのテスト
 */
describe('Sample5Component', () => {
  describe('子コンポーネントの情報をテストに教える', () => {
    let component: Sample5Component;
    let fixture: ComponentFixture<Sample5Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ 
          Sample5Component,
          Sample4Component,
        ],
        providers: [
          { provide: LoggerService, useValue: {} },
        ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample5Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('子コンポーネントを無視する', () => {
    let component: Sample5Component;
    let fixture: ComponentFixture<Sample5Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ 
          Sample5Component,
        ],
        schemas: [ NO_ERRORS_SCHEMA ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample5Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
  describe('子コンポーネントの構造をテスト用に置き換える', () => {
    let component: Sample5Component;
    let fixture: ComponentFixture<Sample5Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ 
          Sample5Component,
          Sample4Component,
        ],
      })
      .overrideComponent(Sample4Component, {
        set: {
          providers: [
            { provide: LoggerService, useValue: {} },
          ],
        },
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample5Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
