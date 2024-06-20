import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  // Este component se comporta como hijo
  @Input() username: string = '';

  // Propiedad de tipo EventEmitter
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
      id: 1,
      name: 'Fortnite'
    },
    {
      id: 2,
      name: 'Left 4 Dead 2'
    },
    {
      id: 3,
      name: 'God of War 2'
    },
    {
      id: 4,
      name: 'Vice City'
    }
  ]

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
}
