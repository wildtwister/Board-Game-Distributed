import { Component, OnInit } from '@angular/core';
import { TictactoeService } from './tictactoe.service';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  tableSize = 3;
  numbers = [];

  glyphs;

  xGlyph: string;
  oGlyph: string;
  isX: boolean;
  gameStatus: number;
  gameOver: boolean;

  constructor(
    private tttService: TictactoeService
  ) {
    this.numbers = Array(this.tableSize).fill(0).map((x, i) => i);
    this.xGlyph = `X`;
    this.oGlyph = `O`;
   }

  ngOnInit(): void {
    this.reset();
  }

  onSelect(i: number, j: number): void{
    if (!this.glyphs[i][j] && !this.gameOver) {
      this.glyphs[i][j] = this.toggleGlyph();
      this.gameStatus = this.checkStatus(i, j);
      console.log(`${this.gameStatus}`);

    }
  }

  toggleGlyph(): string {
    const glyph = this.isX ? this.xGlyph : this.oGlyph;
    this.isX = !this.isX;
    return glyph;
  }

  checkStatus(i: number, j: number): number{
    // This function returns
    // --> -1: It's a tie
    // -->  0: Continue Playing
    // -->  1: "X" wins
    // -->  2: "O" Wins


    if (this.glyphs[i].every( x => x === this.glyphs[i][j]) ||
        this.glyphs.every( x => x[j] === this.glyphs[i][j]) ||
        this.glyphs.every( (x, index) => x[index] === this.glyphs[i][j]) ||
        this.glyphs.every( (x, index) => x[2 - index] === this.glyphs[i][j])) {

        const playerWon: number = this.glyphs[i][j] === this.xGlyph ? 1 : 2 ;
        console.log(`Player ${playerWon} won`);
        this.gameOver = true;
        return playerWon;

    }

    if (this.glyphs.every( x => x.every( y => y !== ''))) {
      this.gameOver = true;
      return -1;
    }

    return 0;
  }

  reset(): void {
    this.glyphs = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.isX = true;
    this.gameOver = false;
  }
}
