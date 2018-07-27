import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingMeasurementComponent } from './pending-measurement.component';

describe('PendingMeasurementComponent', () => {
  let component: PendingMeasurementComponent;
  let fixture: ComponentFixture<PendingMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
