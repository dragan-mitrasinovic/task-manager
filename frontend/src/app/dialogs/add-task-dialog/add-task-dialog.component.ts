import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css'],
})
export class AddTaskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  title: string;
  description: string;

  createTask() {
    this.taskService
      .createTask(this.title, this.description, this.data)
      .subscribe((task) => {
        this.taskService.boardChange.emit(true);
        this.dialogRef.close(task);
      });
  }
}
