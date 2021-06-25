import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreviousComplaintComponent } from './view-previous-complaint.component';

describe('ViewPreviousComplaintComponent', () => {
  let component: ViewPreviousComplaintComponent;
  let fixture: ComponentFixture<ViewPreviousComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreviousComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreviousComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
