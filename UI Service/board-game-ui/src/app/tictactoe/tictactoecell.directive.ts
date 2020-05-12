import { Directive, ElementRef, HostListener } from '@angular/core';
import { TictactoeService } from './tictactoe.service';

@Directive({
  selector: '[appTictactoecell]'
})
export class TictactoecellDirective {

  constructor(
    private el: ElementRef,
    private tttService: TictactoeService
  ) { }

  // @HostListener('click') onClick(){
  //   this.el.nati
  // }

}
