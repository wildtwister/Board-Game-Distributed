import { Component, OnInit } from '@angular/core';
import { PawnService } from '../pawn.service';
import { Pawn } from '../pawn';
import { PAWNS } from '../mock-pawns';

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

  constructor(private pawnService: PawnService) {
    this.numbers = Array(this.tableSize).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
    this.pawns = PAWNS;
  }

  onSelect(pawn?: Pawn): void {
    if(pawn){
    }
    // this.pawnService.getPawn(pawn);
  }

  setPawn(x: number, y: number): Pawn {
    return this.pawns.find(pawn => pawn.xPos === x && pawn.yPos === y);
  }

}
