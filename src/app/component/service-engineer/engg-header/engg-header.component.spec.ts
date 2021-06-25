import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggHeaderComponent } from './engg-header.component';

describe('EnggHeaderComponent', () => {
  let component: EnggHeaderComponent;
  let fixture: ComponentFixture<EnggHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnggHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnggHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
