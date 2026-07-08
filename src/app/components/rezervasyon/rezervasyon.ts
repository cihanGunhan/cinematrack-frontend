import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RezervasyonService } from '../../services/rezervasyon';

@Component({
  selector: 'app-rezervasyon',
  imports: [FormsModule, RouterLink],
  templateUrl: './rezervasyon.html',
  styleUrl: './rezervasyon.css'
})
export class Rezervasyon implements OnInit {

  seansId: number = 0;
  rezervasyon: any = null;
  odemeYontemi = 'CREDIT_CARD';
  successMessage = '';
  errorMessage = '';
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rezervasyonService: RezervasyonService
  ) {}

  ngOnInit() {
    this.seansId = Number(this.route.snapshot.paramMap.get('seansKoltukId'));
  }

  createRezervasyon() {
    this.loading = true;
    this.rezervasyonService.createRezervasyon(this.seansId).subscribe({
      next: (rezervasyon) => {
        this.rezervasyon = rezervasyon;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Rezervasyon oluşturulamadı.';
        this.loading = false;
      }
    });
  }

  createBilet() {
    if (!this.rezervasyon) return;
    this.loading = true;

    this.rezervasyonService.createBilet(this.rezervasyon.id).subscribe({
      next: () => {
        this.successMessage = 'Biletiniz oluşturuldu!';
        this.loading = false;
        setTimeout(() => this.router.navigate(['/profil']), 2000);
      },
      error: () => {
        this.errorMessage = 'Bilet oluşturulamadı.';
        this.loading = false;
      }
    });
  }
}
