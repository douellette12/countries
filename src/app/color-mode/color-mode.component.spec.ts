import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorModeComponent } from './color-mode.component';

describe('ColorModeComponent', () => {
  let component: ColorModeComponent;
  let fixture: ComponentFixture<ColorModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorModeComponent]
    });
    fixture = TestBed.createComponent(ColorModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
