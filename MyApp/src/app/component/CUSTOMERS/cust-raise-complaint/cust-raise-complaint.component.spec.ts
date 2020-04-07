import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRaiseComplaintComponent } from './cust-raise-complaint.component';

describe('CustRaiseComplaintComponent', () => {
  let component: CustRaiseComplaintComponent;
  let fixture: ComponentFixture<CustRaiseComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustRaiseComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustRaiseComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
