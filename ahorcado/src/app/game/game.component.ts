import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';
import { WordComponent } from '../word/word.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, WordComponent , KeyboardComponent],
  templateUrl: './game.component.html',  
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  lives: number = 0;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.initGame();
    this.lives = this.gameService.getLives();
  }

  onLetterSelected(event: any) {
    const letter = event as string; // Asegurarte de que el evento se trate como string
    this.gameService.checkLetter(letter);
    this.lives = this.gameService.getLives();
  }
}





