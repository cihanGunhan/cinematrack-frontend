import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { FilmService } from '../../services/film';

@Component({
  selector: 'app-film-detail',
  imports: [RouterLink, SlicePipe],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.css'
})
export class FilmDetail implements OnInit {

  film: any = null;
  seanslar: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFilm(id);
    this.loadSeanslar(id);
  }

  loadFilm(id: number) {
    this.filmService.getFilmById(id).subscribe({
      next: (film) => this.film = film
    });
  }

  loadSeanslar(id: number) {
    this.filmService.getSeanslarByFilm(id).subscribe({
      next: (seanslar) => this.seanslar = seanslar
    });
  }
}
