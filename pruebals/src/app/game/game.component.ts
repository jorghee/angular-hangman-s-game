import { Component, OnInit } from '@angular/core';
import {GameService} from './game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{
  gameStart = false;
  lives: number = 6;
  imageActually: string = '';
  imagesHanged = [
    'assets/image7Ahorcado.png',
    'assets/image6Ahorcado.png',
    'assets/image5Ahorcado.png',
    'assets/image4Ahorcado.png',
    'assets/image3Ahorcado.png',
    'assets/image2Ahorcado.png',
    'assets/image1Ahorcado.png',
  ];
  constructor(private gameService: GameService){}
  ngOnInit(){
  }
  iniciarJuego(){
    this.gameStart = true;
    this.gameService.initGame();
    this.updateImage();
  }


  updateImage(){
    this.imageActually = this.imagesHanged[this.lives];
  }
}
