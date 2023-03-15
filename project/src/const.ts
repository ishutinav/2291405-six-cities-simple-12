enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

enum PlaceTypes {
  apartment = 'Apartment',
  room = 'Private Room',
  house = 'House',
  hotel = 'Hotel',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const MAX_COUNT_CHARACTER_COMMENT = 50;

export {AppRoute, PlaceTypes, AuthorizationStatus, MAX_COUNT_CHARACTER_COMMENT};
