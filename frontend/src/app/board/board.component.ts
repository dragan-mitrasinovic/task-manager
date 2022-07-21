import { Component, OnInit } from '@angular/core';
import { Board } from '../model/board';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task } from '../model/task';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public board: Board = new Board();

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.projectService
      .getProjectData(this.router.url.slice(9))
      .subscribe((data) => {
        this.board.name = data['name'];
        for (let i = 0; i < 5; i++) {
          this.board.columns[i].tasks = data['tasks'][i];
        }
      });
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
