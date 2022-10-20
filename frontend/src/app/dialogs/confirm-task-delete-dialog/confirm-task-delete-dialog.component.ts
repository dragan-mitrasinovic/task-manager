import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-confirm-task-delete-dialog',
  templateUrl: './confirm-task-delete-dialog.component.html',
  styleUrls: ['./confirm-task-delete-dialog.component.css'],
})
export class ConfirmTaskDeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmTaskDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  onConfirm() {
    this.taskService.deleteTask(this.data.id).subscribe(() => {
      this.dialogRef.close('deleted');
    });
  }
}
