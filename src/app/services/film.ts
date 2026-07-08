import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private coreApi = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getAllFilms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.coreApi}/films`);
  }

  getFilmById(id: number): Observable<any> {
    return this.http.get<any>(`${this.coreApi}/films/${id}`);
  }

  fetchFilmFromTmdb(tmdbId: number): Observable<any> {
    return this.http.post<any>(`${this.coreApi}/films/fetch/${tmdbId}`, {});
  }

  getSeanslarByFilm(filmId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.coreApi}/seanslar/film/${filmId}`);
  }
}
