import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Sample42Component } from './sample4-2.component';
import { LoggerService } from '../logger.service';

/**
 * サービスが注入されたコンポーネントのテスト（コンポーネントのインジェクタにサービス登録）
 */
describe('Sample4-2Component', () => {
  describe('overrideComponent - useClass', () => {
    let component: Sample42Component;
    let fixture: ComponentFixture<Sample42Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Sample42Component ],
      })
      .overrideComponent(Sample42Component, {
        set: {
          providers: [
            { provide: LoggerService, useClass: LoggerService },
          ],
        },
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample42Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('テンプレートに出力された値を検証', () => {
      const logger = fixture.debugElement.injector.get(LoggerService);
      spyOn(logger, 'log').and.returnValue('fake text via useClass');
   
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();
   
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('fake text via useClass');
      expect(logger.log).toHaveBeenCalled();
    });
  });

  describe('overrideComponent - useValue', () => {
    let component: Sample42Component;
    let fixture: ComponentFixture<Sample42Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Sample42Component ],
      })
      .overrideComponent(Sample42Component, {
        set: {
          providers: [
            { provide: LoggerService, useValue: { log: () => 'fake text via useValue' } },
          ],
        },
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample42Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('テンプレートに出力された値を検証', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();
   
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('fake text via useValue');
    });
  });

  describe('overrideComponent - useFactory', () => {
    let component: Sample42Component;
    let fixture: ComponentFixture<Sample42Component>;
   
    class FakeLogger {
      text: string;
      log(): string {
        return this.text;
      }
    }

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Sample42Component ],
      })
      .overrideComponent(Sample42Component, {
        set: {
          providers: [
            { provide: LoggerService, useFactory: () => {
              const logger = new FakeLogger();
              logger.text = 'fake text via useFactory';

              return logger;
            } },
          ],
        }
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample42Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('テンプレートに出力された値を検証', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();
               
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('fake text via useFactory');
    });
  });
  
  describe('サービス登録がなくてもテスト可能', () => {
    let component: Sample42Component;
    let fixture: ComponentFixture<Sample42Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Sample42Component ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Sample42Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
