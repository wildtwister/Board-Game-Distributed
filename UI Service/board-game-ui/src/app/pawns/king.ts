import { Pawn } from './pawn';
import { Move } from '../move';

export class King extends Pawn {

  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _color: string, _xPos: number, _yPos: number){
    super(_piece, 'king', _color, _xPos, _yPos, [
      '+1/+1', '-1/+1', '+1/-1', '-1/-1', '+1/0', '0/+1', '0/-1', '-1/0'
    ]);
  }


}
