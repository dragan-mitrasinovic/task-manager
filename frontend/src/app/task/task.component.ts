import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(public taskDialog: MatDialog) {}

  ngOnInit(): void {}

  openTaskDialog(task: Task) {
    this.taskDialog.open(TaskDialogComponent, {
      data: task,
    });
  }
}
