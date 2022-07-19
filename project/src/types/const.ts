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

export enum Titles {
  LoginSignIn = 'Sign in',
  MainCities = 'Cities',
  MainPlaces = 'Places',
  FavoriteTitle = 'Saved listing',
  RoomNearByPlaces = 'Other places in the neighbourhood'
}

export const paramPattern = /:\w+/;
export const transformRoute = (uri: string, value?: string): string => uri.replace(paramPattern, value || '');
