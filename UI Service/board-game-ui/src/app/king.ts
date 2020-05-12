import { Pawn } from './pawn';
import { runInThisContext } from 'vm';

export class King implements Pawn {
  id: string;
  piece: string;
  name: string;
  color: string;
  xPos: number;
  yPos: number;
  rules: string;

  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _color: string, _xPos: number, _yPos: number){
    this.color = _color;
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.name = 'king';
    this.id = _color + '_' + this.name;
    this.piece = _piece;
  }
}
