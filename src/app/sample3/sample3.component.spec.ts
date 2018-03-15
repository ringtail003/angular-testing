import { 
  async, 
  ComponentFixture, 
  fakeAsync,
  tick,
  TestBed 
} from '@angular/core/testing';

import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
} from '@angular/forms';

import { By } from '@angular/platform-browser';

import { Sample3Component } from './sample3.component';

/**
 * Reactive form を利用したコンポーネントのテスト
 */
describe('Sample3Component', () => {
  let component: Sample3Component;
  let fixture: ComponentFixture<Sample3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ Sample3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input - コンポーネントのプロパティがテンプレートに反映される', () => {
    component.form = new FormGroup ({
      name: new FormControl('abc'),
    });
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;
    expect(element.value).toBe('abc');
  });

  it('input - フォームの値の変更がコンポーネントに反映される', () => {
    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;
    element.value = 'def';
    element.dispatchEvent(new Event('input'));

    expect(component.form.value.name).toBe('def');
  });

  it('input - バリデーション結果をフォームから参照', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;

    element.value = '';
    element.dispatchEvent(new Event('input'));
    expect(component.form.valid).toBe(false);

    element.value = 'a bc';
    element.dispatchEvent(new Event('input'));
    expect(component.form.valid).toBe(false);

    element.value = 'abc';
    element.dispatchEvent(new Event('input'));
    expect(component.form.valid).toBe(true);
  }));

  it('input - バリデーション結果を要素から参照', () => {
    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;

    element.value = '';
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(element.classList).toContain('ng-invalid');

    element.value = 'abc';
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(element.classList).toContain('ng-valid');
  });

  it('input - カスタムバリデーション結果をフォームから参照（patchValueによるアプローチ）', () => {
    [
      { expect: true, name: 'abc' },
      { expect: false, name: 'a bc' },
      { expect: false, name: 'a　bc' },
    ].forEach(pattern => {
      component.form.patchValue({ name: pattern.name });
      expect(component.form.valid).toBe(pattern.expect);
    });
  });
});
