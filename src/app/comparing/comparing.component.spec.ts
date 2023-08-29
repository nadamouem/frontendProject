import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparingComponent } from './comparing.component';

describe('ComparingComponent', () => {
  let component: ComparingComponent;
  let fixture: ComponentFixture<ComparingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparingComponent]
    });
    fixture = TestBed.createComponent(ComparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
