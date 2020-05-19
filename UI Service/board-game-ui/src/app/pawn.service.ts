import { Injectable } from '@angular/core';
import { ChessService } from './chess/chess.service';
import { Pawn } from './pawns/pawn';
import { Tower } from './pawns/tower';
import { Horse } from './pawns/horse';
import { Officer } from './pawns/officer';
import { Queen } from './pawns/queen';
import { King } from './pawns/king';
import { Soldier } from './pawns/soldier';
import { range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PawnService {

  PAWNS: Pawn[] = [];

  constructor(
    private chessService: ChessService
  ) {
    this.PAWNS.push(
      // new King('k', 'white', 4, 4),
      // new Tower('r', 'white', 4, 3),
      // new Queen('q', 'white', 3, 3)
      new Tower('r', 'white', 0, 0),
      new Horse('h', 'white', 0, 1),
      new Officer('b', 'white', 0, 2),
      new Queen('q', 'white', 0, 3),
      new King('k', 'white', 0, 4),
      new Officer('b', 'white', 0, 5),
      new Horse('h', 'white', 0, 6),
      new Tower('r', 'white', 0, 7),
      new Soldier('p', 'white', 1, 0),
      new Soldier('p', 'white', 1, 1),
      new Soldier('p', 'white', 1, 2),
      new Soldier('p', 'white', 1, 3),
      new Soldier('p', 'white', 1, 4),
      new Soldier('p', 'white', 1, 5),
      new Soldier('p', 'white', 1, 6),
      new Soldier('p', 'white', 1, 7),
      new Soldier('o', 'black', 6, 0),
      new Soldier('o', 'black', 6, 1),
      new Soldier('o', 'black', 6, 2),
      new Soldier('o', 'black', 6, 3),
      new Soldier('o', 'black', 6, 4),
      new Soldier('o', 'black', 6, 5),
      new Soldier('o', 'black', 6, 6),
      new Soldier('o', 'black', 6, 7),
      new Tower('t', 'black', 7, 0),
      new Horse('j', 'black', 7, 1),
      new Officer('n', 'black', 7, 2),
      new Queen('w', 'black', 7, 3),
      new King('l', 'black', 7, 4),
      new Officer('n', 'black', 7, 5),
      new Horse('j', 'black', 7, 6),
      new Tower('t', 'black', 7, 7)
    );
  }

  getPawns(): Pawn[]{
    return this.PAWNS;
  }

  implementRules(pawn: Pawn): number[][]{
    let moves = [];

    pawn.ruleSet.forEach(possibleMove => {

      // Parse the rule from the string
      const newMoves = possibleMove
        .split('/')
        .map((x, i) => {
          if (pawn.name === 'soldier' && pawn.color === 'black'){
            return (pawn.position[i] - parseInt(x, 10));
          }
          return (pawn.position[i] + parseInt(x, 10));
      });

      if (pawn.name !== 'horse'){ // Horses have distinct movements, not continious

        // Getting row range
        let xMoves = [];
        range((newMoves[0] <= pawn.position[0] ? newMoves[0] : pawn.position[0] + 1), Math.abs(pawn.position[0] - newMoves[0]))
        .subscribe( x => xMoves.push(x));

        // Getting column range
        const yMoves = [];
        range((newMoves[1] <= pawn.position[1] ? newMoves[1] : pawn.position[1] + 1), Math.abs(pawn.position[1] - newMoves[1]))
        .subscribe( x => yMoves.push(x));

        const difference = Math.abs(xMoves.length - yMoves.length);

        // If vertical movement is different than the horizontal
        // the smallest array reaches the other filling the gap
        // with the current respective dimension
        for (let i = 0; i < difference; i++ ){
          if (xMoves.length > yMoves.length){
            yMoves.push(pawn.position[1]);
          }
          else if (xMoves.length < yMoves.length ){
            xMoves.push(pawn.position[0]);
          }
        }

        // In the case the x-axis sequence of coords doesn't match the
        // y-axis of coords, we reverse the column array. reversing the row
        // array would yield the same results
        if ((newMoves[0] < pawn.position[0] && newMoves[1] >= pawn.position[1]) ||
            (newMoves[1] < pawn.position[1] && newMoves[0] >= pawn.position[0])) {
          xMoves = xMoves.reverse();
        }

        // We zip the two arrays to get the movements of the pawn
        // We also filter those out of the board.
        let filteredMoves: number[][] = xMoves.map((x, i) => [x, yMoves[i]])
              .filter( move => move.every(
                // Filtering out moves out of the board
                x => x <= 7 && x >= 0 ));

        // We need all movement rays to radiate from the selected pawn
        // So, we reverse those arrays that suggest the opposite
        if (filteredMoves.every(x => x[1] < pawn.position[1])){
          filteredMoves = filteredMoves.reverse();
        }

        // We check if there is any pawn in the way, to stop the ray
        let foundObstacle = false;
        filteredMoves.forEach(x => {
          if (!foundObstacle){
            foundObstacle = this.chessService.isTherePawn(x);
            moves.push(x);
          }
        });
      }
      else{

        // this is the case of the horse, there is no need for the above
        moves.push(newMoves);
        moves = moves.filter( move => move.every(
            // Filtering out moves out of the board
            x => x <= 7 && x >= 0
          ));
        moves.forEach( x => this.chessService.isTherePawn(x));

      }
    });

    return moves;
  }
}
