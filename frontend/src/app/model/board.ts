import { Column } from './column';

export class Board {
  public id: string;
  public name: string;
  public columns: Column[];

  constructor() {
    this.columns = [
      new Column('To-Do', '0', []),
      new Column('In Progress', '1', []),
      new Column('In Review', '2', []),
      new Column('In Testing', '3', []),
      new Column('Done', '4', []),
    ];
  }
}
