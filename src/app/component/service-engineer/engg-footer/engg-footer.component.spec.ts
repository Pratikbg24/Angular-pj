import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggFooterComponent } from './engg-footer.component';

describe('EnggFooterComponent', () => {
  let component: EnggFooterComponent;
  let fixture: ComponentFixture<EnggFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnggFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnggFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
