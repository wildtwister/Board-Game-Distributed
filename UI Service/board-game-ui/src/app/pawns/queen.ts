import { Pawn } from './pawn';
import { Move } from '../move';

export class Queen extends Pawn {
  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _color: string, _xPos: number, _yPos: number){
    super(_piece, 'queen', _color, _xPos, _yPos, [
      '+7/+7', '-7/+7', '+7/-7', '-7/-7', '+7/0', '0/+7', '0/-7', '-7/0'
    ]);
  }
}
