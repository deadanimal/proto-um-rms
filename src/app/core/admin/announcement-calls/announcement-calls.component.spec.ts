import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementCallsComponent } from './announcement-calls.component';

describe('AnnouncementCallsComponent', () => {
  let component: AnnouncementCallsComponent;
  let fixture: ComponentFixture<AnnouncementCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
