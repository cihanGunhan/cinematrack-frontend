import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RezervasyonService {

  private bookingApi = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  createRezervasyon(seansKoltukId: number): Observable<any> {
    return this.http.post<any>(`${this.bookingApi}/rezervasyonlar`, {
      seansKoltukId
    });
  }

  getMyRezervasyonlar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.bookingApi}/rezervasyonlar`);
  }

  createBilet(rezervasyonId: number): Observable<any> {
    return this.http.post<any>(`${this.bookingApi}/biletler/${rezervasyonId}`, {});
  }

  getMyBiletler(): Observable<any[]> {
    return this.http.get<any[]>(`${this.bookingApi}/biletler`);
  }
}
