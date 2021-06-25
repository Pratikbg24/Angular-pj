import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggHomeComponent } from './engg-home.component';

describe('EnggHomeComponent', () => {
  let component: EnggHomeComponent;
  let fixture: ComponentFixture<EnggHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnggHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnggHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
