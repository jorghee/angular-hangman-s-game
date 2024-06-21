import { Component, Input } from '@angular/core';
import { GameComponent } from '../game/game.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hangman-drawing',
  standalone: true,
  imports: [GameComponent, CommonModule],
  templateUrl: './hangman-drawing.component.html',
  styleUrl: './hangman-drawing.component.css'
})
export class HangmanDrawingComponent {
  @Input() lives: number = 0;

  getDrawingSteps() {
    const steps = [
      'head',
      'body',
      'left-arm',
      'right-arm',
      'left-leg',
      'right-leg'
    ];
    return steps.slice(0, 6 - this.lives);
  }
}
