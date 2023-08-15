import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from '../../../app/basic/counter-rounte/counter-rounte.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('CounterRounteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;
  let compiled: HTMLElement;

  test('should have initalValue at zero', async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.counter).toBe(0)
  });

  test('should have initalValue at 100 on route counter/100', async () => {

    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return (param === 'initial') ? 100 : undefined;
          }
        }
      }
    }

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100)
  });

  test('should have initalValue at 10 on route counter/20af', async () => {

    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return (param === 'initial') ? '20af' : undefined;
          }
        }
      }
    }

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10)
  });
});
