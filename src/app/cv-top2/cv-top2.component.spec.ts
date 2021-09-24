import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTop2Component } from './cv-top2.component';

describe('CvTop2Component', () => {
  let component: CvTop2Component;
  let fixture: ComponentFixture<CvTop2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvTop2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
