import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEnggListComponent } from './service-engg-list.component';

describe('ServiceEnggListComponent', () => {
  let component: ServiceEnggListComponent;
  let fixture: ComponentFixture<ServiceEnggListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEnggListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEnggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
