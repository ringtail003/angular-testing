import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { 
   FormsModule,
   NgForm
 } from '@angular/forms';
 import { By } from '@angular/platform-browser';

import { Sample2Component } from './sample2.component';

/**
 * Template-driven Forms を利用したコンポーネントのテスト
 */
describe('Sample2Component', () => {
  let component: Sample2Component;
  let fixture: ComponentFixture<Sample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ Sample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample2Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getForm() {
    return fixture.debugElement.children[0].injector.get(NgForm);
  }

  it('input - コンポーネントのプロパティがフォームに反映される', fakeAsync(() => {
    component.name = 'abc'; // ②
    fixture.detectChanges(); // ③
    tick();

    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;
    expect(element.value).toBe('abc');
    expect(getForm().value.name).toBe('abc');
  }));

  it('input フォームの値の変更がコンポーネントに反映される', fakeAsync(() => {
    fixture.detectChanges();
    tick();
 
    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;
    element.value = 'def';
    element.dispatchEvent(new Event('input'));
 
    expect(component.name).toBe('def');
    expect(getForm().value.name).toBe('def');
  }));

  it('input フォームのバリデーション', fakeAsync(() => {
    fixture.detectChanges();
    tick();
  
    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;
  
    element.value = '';
    element.dispatchEvent(new Event('input'));
    expect(getForm().valid).toBe(false);
  
    element.value = 'abc';
    element.dispatchEvent(new Event('input'));
    expect(getForm().valid).toBe(true);
  }));
});
