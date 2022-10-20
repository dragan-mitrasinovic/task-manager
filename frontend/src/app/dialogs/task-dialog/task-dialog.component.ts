import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';
import { ConfirmTaskDeleteDialogComponent } from '../confirm-task-delete-dialog/confirm-task-delete-dialog.component';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskService,
    public confirmDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  editTask() {
    this.taskService.editTask(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  deleteTask() {
    let confirmDialogRef = this.confirmDialog.open(
      ConfirmTaskDeleteDialogComponent,
      {
        data: this.data,
      }
    );
    confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialogRef.close(result);
      }
    });
  }
}
