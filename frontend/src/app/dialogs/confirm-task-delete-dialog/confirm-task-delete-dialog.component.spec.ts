import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTaskDeleteDialogComponent } from './confirm-task-delete-dialog.component';

describe('ConfirmTaskDeleteDialogComponent', () => {
  let component: ConfirmTaskDeleteDialogComponent;
  let fixture: ComponentFixture<ConfirmTaskDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmTaskDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmTaskDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
