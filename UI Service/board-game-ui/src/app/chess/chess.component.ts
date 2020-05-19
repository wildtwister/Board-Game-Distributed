import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PawnService } from '../pawn.service';
import { ChessService } from './chess.service';
import { Pawn } from '../pawns/pawn';
import { Move } from '../move';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  tableSize = 8;
  numbers = [];
  letters = [, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  pawns: Pawn[];
  clickedCell = [];

  constructor(private pawnService: PawnService,
              private chessService: ChessService,
              private elref: ElementRef) {
    this.numbers = Array(this.tableSize).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
    this.pawns = this.pawnService.getPawns();
  }

  onSelect(pawn?: Pawn): void {
    const pawnColor = pawn.color;
    let availableMoves = this.pawnService.implementRules(pawn);

    availableMoves = availableMoves.filter(move => {
      let thisPawn;
      thisPawn = this.pawns.find( j => j.position.every((x, i) => x === move[i]));
      if (thisPawn){
        return !(thisPawn.color === pawnColor);
      }

      return this.pawns.find( j => j.position.every((x, i) => x !== move[i]));
    });

    this.chessService.highlightCells(availableMoves, pawn);
  }

  setPawn(x: number, y: number): Pawn {
    return this.pawns.find(pawn => pawn.position[0] === x && pawn.position[1] === y);
  }

  // tslint:disable-next-line: member-ordering


  @HostListener('click') movePawn(ev){
    ev.stopPropagation();
    const el = ev.target;
    if (el.classList.contains('highlighted')){
      const curPos = this.clickedCell.pop().split('_').map( x => parseInt(x, 10));
      const nextPos = el.id.split('_').map( x => parseInt(x, 10));

      // this will run if there is an enemy in the cell
      this.killPawn(this.pawns.find(pawn => pawn.position
        .every((x, i) => x === nextPos[i])
      ));

      this.pawns
        .find(pawn => pawn.position
          .every((x, i) => x === curPos[i])
        )
        .updatePosition(nextPos);
    }else if (el.classList.contains('pawn')){
      this.clickedCell.pop();
      this.clickedCell.push(el.parentNode.id);
      console.log('the clicked cell is ' + this.clickedCell);
    }
  }

  killPawn(pawn?: Pawn) {
    if (pawn) {
      const index = this.pawns.indexOf(pawn);
      const deletedPawn = this.pawns.splice(index, 1);
      console.log(` ${deletedPawn[0].color} ${deletedPawn[0].name} was killed`);
      if (pawn.name === 'king'){
        const winningColor = pawn.color === 'white' ? 'Black' : 'White';
        alert(`Game Over, ${winningColor} wins!`);
      }
    }
  }


}
