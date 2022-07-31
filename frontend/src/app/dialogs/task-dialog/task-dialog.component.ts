import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  editTask() {
    this.taskService.editTask(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
