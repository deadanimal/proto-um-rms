import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantContractManagementComponent } from './grant-contract-management.component';

describe('GrantContractManagementComponent', () => {
  let component: GrantContractManagementComponent;
  let fixture: ComponentFixture<GrantContractManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantContractManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantContractManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
