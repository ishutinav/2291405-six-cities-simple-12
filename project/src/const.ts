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

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {
  AppRoute,
  PlaceTypes,
  AuthorizationStatus,
  SortTypes,
  MIN_CHARACTER_COMMENT,
  MAX_CHARACTER_COMMENT,
  RATING_STARS_COUNT,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT
};
