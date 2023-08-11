import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../../../../src/app/basic/counter/counter.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be equal to snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('should be increaseBy based on the argument', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  })

  test('should increment and decrement in 1, when click buttons', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11)
    buttons[1].click();
    expect(component.counter).toBe(10)
  })

  test('should refresh h1 tag, when counter change', () => {
    component.increaseBy(10);
    fixture.detectChanges();
    const h1 = compiled.querySelector('h2')
    expect(h1?.textContent).toContain('20');
  })
});
