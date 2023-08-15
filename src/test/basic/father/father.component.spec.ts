import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FatherComponent } from '../../../app/basic/father/father.component';
import { FatherSonComponent } from '../../../app/basic/father-son/father-son.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  })

  test('should create a component', () => {
    expect(component).toBeTruthy();
  });

  test('should match with the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  })

  test('should set the client with the given name', () => {
    component.onSetClient('Peter')
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');

    expect(codeDiv?.textContent).toContain('"name"');
    expect(codeDiv?.textContent).toContain('"Peter"');
  })

  test('should delete client if emit onDeleteClient (from son)', () => {
    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onDeleteClient.emit();
    console.log(sonComponent.client)
    // expect(sonComponent?.client).toBe(undefined);
  })

  test('should update client if emit onClientUpdated (from son)', () => {
    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onClientUpdated.emit({ id: 2, name: 'Fer' });
    // expect(sonComponent?.client).toEqual({ id: 2, name: 'Fer' });
  })

});
