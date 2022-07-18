export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = '/offer',
  Favorites = '/favorites'
}

export enum AuthorisationStatus {
  Auth = 'Auth',
  NotAuth = 'NoAuth',
  UnKnown = 'UnKnown'
}

export const cities = ['Amsterdam', 'Brussels', 'Cologne', 'Dusseldorf', 'Hamburg', 'Paris'] as const;

export const paramPattern = /:\w+/;
