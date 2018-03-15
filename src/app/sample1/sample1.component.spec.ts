import { 
  async, 
  fakeAsync,
  ComponentFixture, 
  tick,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Sample1Component } from './sample1.component';

/**
 * フォームに含まれない単体のHTML要素のテスト 
 */
describe('Sample1Component', () => {
  let component: Sample1Component;
  let fixture: ComponentFixture<Sample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ Sample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('span - コンポーネントのプロパティがテンプレートに反映される', () => {
    component.id = 100;
    fixture.detectChanges();
 
    const element = fixture.debugElement.query(By.css('[name=id]')).nativeElement as HTMLSpanElement;
    expect(element.textContent).toBe('100');
  });

  it('input - コンポーネントのプロパティがテンプレートに反映される', fakeAsync(() => {
    component.name = 'abc';
    fixture.detectChanges();
    tick();

    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;
    expect(element.value).toBe('abc');
  }));

  it('input - テンプレートの値の変更がコンポーネントに反映される', () => {
    const element = fixture.debugElement.query(By.css('[name=name]')).nativeElement as HTMLInputElement;
    element.value = 'def';
    element.dispatchEvent(new Event('input'));
   
    expect(component.name).toBe('def');
  });

  it('radio - コンポーネントのプロパティがテンプレートに反映される', fakeAsync(() => {
    component.gender = 'male';
    fixture.detectChanges();
    tick();
   
    const radio = fixture.debugElement.query(By.css('[name=gender][value=male]')).nativeElement as HTMLInputElement;
    expect(radio.checked).toBe(true);
  }));
   
  it('radio - テンプレートの値の変更がコンポーネントに反映される', () => {
    const radio = fixture.debugElement.query(By.css('[name=gender][value=male]')).nativeElement as HTMLInputElement;
    radio.click();
 
    expect(component.gender).toBe('male');
  });

  it('checkbox - コンポーネントのプロパティがテンプレートに反映される', fakeAsync(() => {
    component.agreement = true;
    fixture.detectChanges();
    tick();
   
    const checkbox = fixture.debugElement.query(By.css('[name=agreement]')).nativeElement as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  }));
   
  it('checkbox - テンプレートの値の変更がコンポーネントに反映される', () => {
    const checkbox = fixture.debugElement.query(By.css('[name=agreement]')).nativeElement as HTMLInputElement;
    checkbox.click();
   
    expect(component.agreement).toBe(true);
  });

  it('select - コンポーネントのプロパティがテンプレートに反映される', fakeAsync(() => {
    component.work = component.works[1];
    fixture.detectChanges();
    tick();
   
    const option = fixture.debugElement.queryAll(By.css('[name=work] option'))[1].nativeElement as HTMLOptionElement;
    expect(option.selected).toBe(true);
  }));
   
  it('select - テンプレートの値の変更がコンポーネントに反映される', () => {
    const select = fixture.debugElement.query(By.css('[name=work]')).nativeElement;
    const option = fixture.debugElement.queryAll(By.css('[name=work] option'))[2].nativeElement;
   
    select.value = option.value;
    select.dispatchEvent(new Event('change'));
    expect(component.work.label).toBe('その他');
  });

  it('textarea - コンポーネントのプロパティがテンプレートに反映される', fakeAsync(() => {
    component.note = 'ABC';
    fixture.detectChanges();
    tick();
   
    const element = fixture.debugElement.query(By.css('[name=note]')).nativeElement as HTMLTextAreaElement;
    expect(element.value).toBe('ABC');
  }));
   
  it('textarea - テンプレートの値の変更がコンポーネントに反映される', () => {
    const element = fixture.debugElement.query(By.css('[name=note]')).nativeElement;
    element.value = 'DEF';
    element.dispatchEvent(new Event('input'));
   
    expect(component.note).toBe('DEF');
  });
});
