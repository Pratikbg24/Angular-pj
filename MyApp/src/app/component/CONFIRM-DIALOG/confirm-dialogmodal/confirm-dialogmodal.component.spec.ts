import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogmodalComponent } from './confirm-dialogmodal.component';

describe('ConfirmDialogmodalComponent', () => {
  let component: ConfirmDialogmodalComponent;
  let fixture: ComponentFixture<ConfirmDialogmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
