import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceEnggComponent } from './update-service-engg.component';

describe('UpdateServiceEnggComponent', () => {
  let component: UpdateServiceEnggComponent;
  let fixture: ComponentFixture<UpdateServiceEnggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServiceEnggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceEnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
