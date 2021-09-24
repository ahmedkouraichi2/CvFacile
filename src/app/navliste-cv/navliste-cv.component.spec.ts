import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlisteCvComponent } from './navliste-cv.component';

describe('NavlisteCvComponent', () => {
  let component: NavlisteCvComponent;
  let fixture: ComponentFixture<NavlisteCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavlisteCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlisteCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
