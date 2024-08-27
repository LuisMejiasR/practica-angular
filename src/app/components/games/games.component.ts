import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Super Mario Bros',
    },
    {
      id: 2,
      name: 'Zelda',
    },
    {
      id: 3,
      name: 'Metroid',
    },
    {
      id: 4,
      name: 'Donkey Kong',
    }
  ]
}
