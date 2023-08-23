import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertComponentComponent } from './convert.component.component';

describe('ConvertComponentComponent', () => {
  let component: ConvertComponentComponent;
  let fixture: ComponentFixture<ConvertComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertComponentComponent]
    });
    fixture = TestBed.createComponent(ConvertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
