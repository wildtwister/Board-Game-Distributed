import { Injectable } from '@angular/core';
import { Pawn } from '../pawns/pawn';

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  gridItemSelected = '';
  highlightedCells = [];

  constructor(
  ){}

  getItemSelected(): string{
    return this.gridItemSelected;
  }

  setItemSelected(item: string): void{
    this.gridItemSelected = item;
  }

  isTherePawn(pos: number[]): boolean {
    return document
            .getElementById(pos[0] + '_' + pos[1])
            .innerHTML
            .includes('pawn');
  }

  highlightCells(cells: number[][], pawn: Pawn){

      this.clearHighlightedCells();

      this.highlightedCells = cells;

      cells
      // .filter(
      //   // TODO filter the cells that contain friendly pawns
      //   pos => re

      // )
      .forEach( pos =>
      document
      .getElementById(pos[0] + '_' + pos[1])
      .classList
      .add('highlighted'));
  }

  clearHighlightedCells(){
    if (this.highlightedCells) {
      this.highlightedCells.forEach( pos =>
        document
        .getElementById(pos[0] + '_' + pos[1])
        .classList
        .remove('highlighted'));
    }
  }

}
