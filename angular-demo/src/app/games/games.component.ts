import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  // Uso del decorador, este component se comporta como hijo
  @Input() username: string = '';

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
}
