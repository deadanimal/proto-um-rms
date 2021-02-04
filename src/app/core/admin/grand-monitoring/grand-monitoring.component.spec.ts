import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandMonitoringComponent } from './grand-monitoring.component';

describe('GrandMonitoringComponent', () => {
  let component: GrandMonitoringComponent;
  let fixture: ComponentFixture<GrandMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
