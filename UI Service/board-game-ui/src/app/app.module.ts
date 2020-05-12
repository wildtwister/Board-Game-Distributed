import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessComponent } from './chess/chess.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TictactoecellDirective } from './tictactoe/tictactoecell.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChessComponent,
    TictactoeComponent,
    HomeComponent,
    LoginComponent,
    TictactoecellDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
