import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {
      id: 1;
      name: 'Fortnite'
    },
    {
      id: 2;
      name: 'Left 4 Dead 2'
    },
    {
      id: 3;
      name: 'Valorant'
    },
    {
      id: 4;
      name: 'Vice City'
    }
  ]
}
