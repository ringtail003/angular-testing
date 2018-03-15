import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Sample4Component } from './sample4.component';
import { LoggerService } from '../logger.service';

/**
 * サービスが注入されたコンポーネントのテスト（ルートインジェクタにサービス登録）
 */
describe('Sample4Component', () => {
  describe('TestBed - useClass', () => {
    let component: Sample4Component;
    let fixture: ComponentFixture<Sample4Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Sample4Component ],
        providers: [
          { provide: LoggerService, useClass: LoggerService },
        ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample4Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('テンプレートに出力された値を検証', () => {
      const logger = TestBed.get(LoggerService);
      spyOn(logger, 'log').and.returnValue('fake text via useClass');
   
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();
   
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('fake text via useClass');
      expect(logger.log).toHaveBeenCalled();
    });
  });

  describe('TestBed - useValue', () => {
    let component: Sample4Component;
    let fixture: ComponentFixture<Sample4Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Sample4Component ],
        providers: [
          { provide: LoggerService, useValue: { log: () => 'fake text via useValue' } },
        ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample4Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('テンプレートに出力された値を検証', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();
   
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('fake text via useValue');
    });
  });

  describe('TestBed - useFactory', () => {
    let component: Sample4Component;
    let fixture: ComponentFixture<Sample4Component>;
   
    class FakeLogger {
      text: string;
      log(): string {
        return this.text;
      }
    }

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Sample4Component ],
        providers: [
          { provide: LoggerService, useFactory: () => {
            const logger = new FakeLogger();
            logger.text = 'fake text via useFactory';

            return logger;
          } },
        ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample4Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('テンプレートに出力された値を検証', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();
               
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('fake text via useFactory');
    });
  });
});
