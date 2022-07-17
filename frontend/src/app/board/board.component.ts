import { Component, OnInit } from '@angular/core';
import { Board } from '../model/board';
import { Column } from '../model/column';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task } from '../model/task';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public board: Board = new Board('id', 'Init title', [
    new Column('To-Do', '0', []),
    new Column('In Progress', '1', []),
    new Column('In Review', '2', []),
    new Column('In Testing', '3', []),
    new Column('Done', '4', []),
  ]);

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  public ngOnInit(): void {
    this.projectService.getProjectData().subscribe((data) => {
      this.board.id = data['id'];
      this.board.name = data['name'];
      this.board.columns[0].tasks = data['tasks'][0];
      this.board.columns[1].tasks = data['tasks'][1];
      this.board.columns[2].tasks = data['tasks'][2];
      this.board.columns[3].tasks = data['tasks'][3];
      this.board.columns[4].tasks = data['tasks'][4];
    });
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.board.columns,
      event.previousIndex,
      event.currentIndex
    );
  }

  public drop(event: CdkDragDrop<Task[], any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.taskService
        .moveTask(
          event.container.data[event.currentIndex]['id'],
          event.container['id']
        )
        .subscribe();
    }
  }
}
