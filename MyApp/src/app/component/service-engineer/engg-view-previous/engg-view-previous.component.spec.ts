import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggViewPreviousComponent } from './engg-view-previous.component';

describe('EnggViewPreviousComponent', () => {
  let component: EnggViewPreviousComponent;
  let fixture: ComponentFixture<EnggViewPreviousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnggViewPreviousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnggViewPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
