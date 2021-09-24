import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutCVComponent } from './tout-cv.component';

describe('ToutCVComponent', () => {
  let component: ToutCVComponent;
  let fixture: ComponentFixture<ToutCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
