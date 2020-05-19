import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ChessService } from './chess.service';

@Directive(
  {
    selector: '[appSelect]'
  }
)

// tslint:disable-next-line: directive-class-suffix
export class AppSelect
{
  constructor(
    private render: Renderer2,
    private elref: ElementRef,
    private chessService: ChessService
  ){}

  @HostListener('click') onclick(){
    if (!this.hasClass('selected')){
      this.appendClass('selected');
    }
    else{
      this.removeClass('selected');
    }

  }





  // Util Functions
  private hasClass(classString: string): boolean{
    return this.elref.nativeElement.classList.contains(classString); }

  private appendClass(classString: string){
    if (this.chessService.getItemSelected() !== ''){
      document.getElementById(this.chessService.getItemSelected()).classList.remove('selected');
    }
    this.chessService.setItemSelected(this.elref.nativeElement.id);
    this.elref.nativeElement.classList.add(classString); }

  private removeClass(classString: string){
    this.elref.nativeElement.classList.remove(classString); }
}
