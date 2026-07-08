import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  films: any[] = [];
  tmdbId: number | null = null;
  searchError = '';
  email = localStorage.getItem('email') || '';

  constructor(
    private filmService: FilmService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getAllFilms().subscribe({
      next: (films) => this.films = films
    });
  }

  fetchFilm() {
    if (!this.tmdbId) return;

    this.filmService.fetchFilmFromTmdb(this.tmdbId).subscribe({
      next: () => {
        this.tmdbId = null;
        this.searchError = '';
        this.loadFilms();
      },
      error: () => {
        this.searchError = 'Film bulunamadı. TMDB ID\'yi kontrol edin.';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
