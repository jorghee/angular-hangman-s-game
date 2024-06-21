import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-drawing',
  standalone: true,
  imports: [],
  templateUrl: './hangman-drawing.component.html',
  styleUrl: './hangman-drawing.component.css'
})
export class HangmanDrawingComponent {
  @Input() lives: number;

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
