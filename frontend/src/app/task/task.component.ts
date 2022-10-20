import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(public taskDialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {}

  openTaskDialog(task: Task) {
    let dialogRef = this.taskDialog.open(TaskDialogComponent, {
      data: task,
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'deleted') {
        this.taskService.boardChange.emit(true);
      }
    });
  }

  refreshData() {
    this.taskService.getTask(this.task.id).subscribe((data: Task) => {
      this.task = data;
    });
  }
}
