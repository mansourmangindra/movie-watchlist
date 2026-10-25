import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MovieList } from './components/movie-list/movie-list';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Header, MovieList, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
