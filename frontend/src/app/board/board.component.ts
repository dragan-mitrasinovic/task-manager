import { Component, OnInit } from '@angular/core';
import { Board } from '../model/board';
import { Column } from '../model/column';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public board: Board = new Board('Test Board', [
    new Column('To-Do', '1', [
      'Some random idea',
      'This is another random idea',
    ]),
    new Column('In Progress', '2', ['Lorem ipsum', 'foo']),
    new Column('In Review', '3', ['Lorem ipsum', 'foo']),
    new Column('In Testing', '4', ['Lorem ipsum', 'foo']),
    new Column('Done', '5', ['Lorem ipsum', 'foo']),
  ]);

  constructor() {}

  public ngOnInit(): void {
    console.log(this.board);
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.board.columns,
      event.previousIndex,
      event.currentIndex
    );
  }

  public drop(event: CdkDragDrop<string[]>): void {
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
    }
  }
}
