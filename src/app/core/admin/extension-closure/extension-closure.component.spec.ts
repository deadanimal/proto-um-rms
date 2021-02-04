import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionClosureComponent } from './extension-closure.component';

describe('ExtensionClosureComponent', () => {
  let component: ExtensionClosureComponent;
  let fixture: ComponentFixture<ExtensionClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionClosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
