import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { WordComponent } from './word/word.component';

export const routes: Routes = [
    { path: '', component: GameComponent },
    { path: 'a', component: KeyboardComponent},
    { path: 'b', component: WordComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
