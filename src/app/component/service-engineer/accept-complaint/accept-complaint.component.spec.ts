import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptComplaintComponent } from './accept-complaint.component';

describe('AcceptComplaintComponent', () => {
  let component: AcceptComplaintComponent;
  let fixture: ComponentFixture<AcceptComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
