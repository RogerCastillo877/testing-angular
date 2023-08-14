import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherSonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  })

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should make match with snapshot', () => {
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  })

  test('should not display buttons without client', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0)
  })

  test('should display buttons if have client', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  })

  test('should display 2 buttons if have client', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    expect(compiled).toMatchSnapshot;
  })

  test('should emit onDeleteClient with delete button', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test="btn-delete"]');
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toBeCalled();
  })

  test('should emit onClientUpdated with button "change Id"', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdated, 'emit');

    const btnChangeId = compiled.querySelector('[data-test="btn-change-id"]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 3,
      name: 'Juan'
    });
  })

  test('should emit onChangeClient with specific ID if have client', () => {
    jest.spyOn(component.onClientUpdated, 'emit');
    component.onChange(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();
    component.onChange(10);
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'Juan'
    });
  })
});
