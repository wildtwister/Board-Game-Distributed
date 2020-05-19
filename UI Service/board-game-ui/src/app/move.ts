export class Move {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;

  constructor(curX: number, curY: number, nextX: number, nextY: number){
    this.fromX = curX;
    this.fromY = curY;
    this.toX = nextX;
    this.toY = nextY;
  }
}
