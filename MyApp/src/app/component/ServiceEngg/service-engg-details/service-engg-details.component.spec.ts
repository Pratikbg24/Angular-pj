import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEnggDetailsComponent } from './service-engg-details.component';

describe('ServiceEnggDetailsComponent', () => {
  let component: ServiceEnggDetailsComponent;
  let fixture: ComponentFixture<ServiceEnggDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEnggDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEnggDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
