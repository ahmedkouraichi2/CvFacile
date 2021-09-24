import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirTous2Component } from './voir-tous2.component';

describe('VoirTous2Component', () => {
  let component: VoirTous2Component;
  let fixture: ComponentFixture<VoirTous2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirTous2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirTous2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
