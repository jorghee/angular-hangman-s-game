import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private word: string[] = [];
  private lives: number = 6;

  initGame() {
    const words = ['ANGULAR', 'JAVASCRIPT', 'TYPESCRIPT', 'DEVELOPER'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    this.word = randomWord.split('');
    this.lives = 6;
  }

  getWord() {
    return this.word;
  }

  checkLetter(letter: string) {
    let found = false;
    this.word.forEach((char, index) => {
      if (char === letter) {
        this.word[index] = letter;
        found = true;
      }
    });

    if (!found) {
      this.lives--;
    }
  }

  getLives() {
    return this.lives;
  }
}


