import { Component } from '@angular/core';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component'

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [HangmanDrawingComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  words: string[] = ['angular', 'typescript', 'javascript', 'developer'];
  selectedWord: string = '';
  displayWord: string[] = [];
  guessedLetters: string[] = [];
  lives: number = 6;

  constructor() {
    this.startNewGame();
  }

  startNewGame() {
    this.lives = 6;
    this.guessedLetters = [];
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.displayWord = Array(this.selectedWord.length).fill('_');
  }

  guessLetter(letter: string) {
    if (this.guessedLetters.includes(letter) || this.lives <= 0) return;

    this.guessedLetters.push(letter);

    if (this.selectedWord.includes(letter)) {
      for (let i = 0; i < this.selectedWord.length; i++) {
        if (this.selectedWord[i] === letter) {
          this.displayWord[i] = letter;
        }
      }
    } else {
      this.lives--;
    }
  }

  isGameOver(): boolean {
    return this.lives <= 0 || !this.displayWord.includes('_');
  }

  isGameWon(): boolean {
    return !this.displayWord.includes('_');
  }
}
