import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTotalComponent } from './cv-total.component';

describe('CvTotalComponent', () => {
  let component: CvTotalComponent;
  let fixture: ComponentFixture<CvTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
