import { Pawn } from './pawn';

export class Officer extends Pawn {

  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _color: string, _xPos: number, _yPos: number){
    super(_piece, 'officer', _color, _xPos, _yPos,  [
      '+7/+7', '-7/+7', '+7/-7', '-7/-7'
    ]);
  }
}
