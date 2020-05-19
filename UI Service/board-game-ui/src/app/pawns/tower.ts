import { Pawn } from './pawn';

export class Tower extends Pawn{

  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _color: string, _xPos: number, _yPos: number){
    super(_piece, 'tower', _color, _xPos, _yPos, [
      '+7/0', '0/+7', '0/-7', '-7/0'
    ]);
  }
}
