import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-movie-search',
  styleUrl: './movie-search.css',
  templateUrl: './movie-search.html',
})
export class MovieSearch {
  readonly query = model('');
}
