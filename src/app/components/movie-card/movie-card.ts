import { Component, input, output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  imports: [],
  selector: 'app-movie-card',
  styleUrl: './movie-card.css',
  templateUrl: './movie-card.html',
})
export class MovieCard {
  readonly movie = input.required<Movie>();
  readonly statusUpdate = output<number>();

  protected requestStatusUpdate(): void {
    this.statusUpdate.emit(this.movie().id);
  }
}
