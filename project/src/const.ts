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

enum SortTypes {
  DEFAULT = 'Popular',
  PRICE_UP = 'Price: low to high',
  PRICE_DOWN = 'Price: high to low',
  RATING = 'Top rated first'
}

const MIN_CHARACTER_COMMENT = 50;
const MAX_CHARACTER_COMMENT = 300;
const RATING_STARS_COUNT = 5;
const MAX_COUNT_COMMENTS = 10;

const URL_MARKER_DEFAULT = '../img/pin.svg';
const URL_MARKER_CURRENT = '../img/pin-active.svg';

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export {
  AppRoute,
  PlaceTypes,
  AuthorizationStatus,
  SortTypes,
  CITIES,
  MIN_CHARACTER_COMMENT,
  MAX_CHARACTER_COMMENT,
  RATING_STARS_COUNT,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  MAX_COUNT_COMMENTS
};
