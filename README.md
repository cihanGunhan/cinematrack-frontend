# CinemaTrack Frontend

Angular frontend for the CinemaTrack cinema reservation system.

Built with Angular 19 and Bootstrap 5 (Bootswatch Darkly theme).

## Requirements

- Node.js 18+
- Angular CLI
- cinema-core-service running on port 8081
- cinema-booking-service running on port 8082

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

Application runs on `http://localhost:4200`

## Pages

- **Login / Register** — JWT authentication
- **Home** — film listing with TMDB integration
- **Film Detail** — showtimes for selected film
- **Reservation** — seat reservation and ticket purchase
- **Profile** — user reservations and tickets

## Backend

This frontend requires two backend services. See [cinematrack](https://github.com/cihanGunhan/cinematrack) for Docker Compose setup.

## Tech Stack

- Angular 19
- Bootstrap 5
- Bootswatch Darkly
- JWT authentication via HttpInterceptor
- AuthGuard for protected routes
