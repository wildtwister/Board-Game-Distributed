import { Pawn } from './pawn';

export class Horse extends Pawn{
  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _color: string, _xPos: number, _yPos: number){
    super(_piece, 'horse', _color, _xPos, _yPos, [
      '+1/+2', '-1/+2', '+1/-2', '-1/-2', '+2/+1', '-2/+1', '+2/-1', '-2/-1'
    ]);
  }

}
