export class Pawn {
  piece: string;
  name: string;
  color: string;
  position: number[] = [];
  ruleSet: string[] = [];

  // tslint:disable-next-line: variable-name
  constructor(_piece: string, _name: string, _color: string, _xPos: number, _yPos: number, _ruleset: string[]){
    this.color = _color;
    this.name = _name;
    this.piece = _piece;
    this.position.push(_xPos, _yPos);
    this.ruleSet = _ruleset;
  }

  updatePosition(nextPos: number[]){
    this.position = nextPos;
  }

}
