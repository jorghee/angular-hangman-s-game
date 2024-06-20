import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  word: string[] = [];

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.gameService.initGame();
    this.word = this.gameService.getWord();
  }
}

