import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Asegúrate de tener esto importado
import { AppComponent } from './app.component';
import { HangmanDrawingComponent } from './hangman-drawing/hangman-drawing.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HangmanDrawingComponent
  ],
  imports: [
    BrowserModule  // Esto ya incluye CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
