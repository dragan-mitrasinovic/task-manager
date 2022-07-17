import { Column } from './column';

export class Board {
  constructor(
    public id: string,
    public name: string,
    public columns: Column[]
  ) {}
}
