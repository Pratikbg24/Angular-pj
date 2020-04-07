import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEnggEditComponent } from './service-engg-edit.component';

describe('ServiceEnggEditComponent', () => {
  let component: ServiceEnggEditComponent;
  let fixture: ComponentFixture<ServiceEnggEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEnggEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEnggEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
