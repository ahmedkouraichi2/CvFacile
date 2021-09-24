import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTopComponent } from './cv-top.component';

describe('CvTopComponent', () => {
  let component: CvTopComponent;
  let fixture: ComponentFixture<CvTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
