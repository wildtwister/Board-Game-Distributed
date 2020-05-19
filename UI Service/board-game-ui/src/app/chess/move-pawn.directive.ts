import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ChessService } from './chess.service';

@Directive({
  selector: '[appMovePawn]'
})
export class MovePawnDirective {

  constructor(
    private hostListener: HostListener,
    private elref: ElementRef,
    private renderer: Renderer2,
    private chessService: ChessService
  ) { }

  @HostListener('click', ['$event.target.id']) onClick(id: any){
    alert(' You Clicked the cell with id: ' + id);
  }

}
