import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantMatchupComponent } from './applicant-matchup.component';

describe('ApplicantMatchupComponent', () => {
  let component: ApplicantMatchupComponent;
  let fixture: ComponentFixture<ApplicantMatchupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantMatchupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
