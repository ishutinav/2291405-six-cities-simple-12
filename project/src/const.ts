enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer',
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

const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';
const REQUEST_TIME = 5000;
const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

enum NameSpace {
  Data = 'DATA',
  Review = 'REVIEW',
  User = 'USER',
}

export {
  AppRoute,
  APIRoute,
  PlaceTypes,
  AuthorizationStatus,
  SortTypes,
  NameSpace,
  BACKEND_URL,
  REQUEST_TIME,
  AUTH_TOKEN_KEY_NAME,
  CITIES,
  MIN_CHARACTER_COMMENT,
  MAX_CHARACTER_COMMENT,
  RATING_STARS_COUNT,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  MAX_COUNT_COMMENTS
};
