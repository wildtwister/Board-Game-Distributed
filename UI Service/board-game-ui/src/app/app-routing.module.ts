import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessComponent } from './chess/chess.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'chess', component: ChessComponent},
  {path: 'tic-tac-toe', component: TictactoeComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
