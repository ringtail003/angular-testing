import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Sample6Component } from './sample6.component';

/**
 * 入出力を伴うコンポーネントのテスト
 */
describe('Sample6Component', () => {
  let component: Sample6Component;
  let fixture: ComponentFixture<Sample6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('@Input の検証', () => {
    component.name = 'foo';
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLSpanElement;
    expect(element.textContent).toBe('foo');
  });

  it('@Output の検証', () => {
    component.name = 'bar';
    let message: string;

    component.greet.subscribe(data => message = data);

    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    button.click();

    expect(message).toBe('Hello bar!');
  });
});
