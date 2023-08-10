import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import 'jest';
import { AppComponent } from '../../src/app/app.component';


describe('AppComponent', () => {

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});