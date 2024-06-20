import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { WordComponent } from './word/word.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WordComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
