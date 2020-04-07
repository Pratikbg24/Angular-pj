import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceEngineerComponent } from './view-service-engineer.component';

describe('ViewServiceEngineerComponent', () => {
  let component: ViewServiceEngineerComponent;
  let fixture: ComponentFixture<ViewServiceEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServiceEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
