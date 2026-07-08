import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { FilmDetail } from './components/film-detail/film-detail';
import { Rezervasyon } from './components/rezervasyon/rezervasyon';
import { Profil } from './components/profil/profil';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home },
  { path: 'film/:id', component: FilmDetail },
  { path: 'rezervasyon/:seansKoltukId', component: Rezervasyon, canActivate: [authGuard] },
  { path: 'profil', component: Profil, canActivate: [authGuard] }
];
