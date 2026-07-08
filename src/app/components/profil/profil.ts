import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { AuthService } from '../../services/auth';
import { RezervasyonService } from '../../services/rezervasyon';

@Component({
  selector: 'app-profil',
  imports: [RouterLink, SlicePipe],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil implements OnInit {

  rezervasyonlar: any[] = [];
  biletler: any[] = [];
  email = localStorage.getItem('email') || '';

  constructor(
    private authService: AuthService,
    private rezervasyonService: RezervasyonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRezervasyonlar();
    this.loadBiletler();
  }

  loadRezervasyonlar() {
    this.rezervasyonService.getMyRezervasyonlar().subscribe({
      next: (data) => this.rezervasyonlar = data
    });
  }

  loadBiletler() {
    this.rezervasyonService.getMyBiletler().subscribe({
      next: (data) => this.biletler = data
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
