import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TictactoeService {

  playerGlyph: string;

  MOCK_GLYPHS = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  constructor(
  ) { }

  resetGlyphs(): string[][]{
    return this.MOCK_GLYPHS;
  }


}
