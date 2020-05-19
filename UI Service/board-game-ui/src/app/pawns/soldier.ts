import { Pawn } from './pawn';

export class Soldier extends Pawn {

  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _color: string, _xPos: number, _yPos: number){
    super(_piece, 'soldier', _color, _xPos, _yPos, [
      '+1/0', '+1/+1', '+1/-1'
    ]);
  }

}
