import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProjectDeleteDialogComponent } from './confirm-project-delete-dialog.component';

describe('ConfirmProjectDeleteDialogComponent', () => {
  let component: ConfirmProjectDeleteDialogComponent;
  let fixture: ComponentFixture<ConfirmProjectDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmProjectDeleteDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmProjectDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
