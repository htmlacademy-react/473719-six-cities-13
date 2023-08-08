enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum AppRoute {
  Root ='/',
  LogIn = '/login',
  FavoriteItems='/favorites',
  OfferItem= '/offer/:id',
  EverythingElse ='*',
}

interface GenericObject {
  [key: string]: string;
}

const sortTypes: GenericObject = {
  normal: 'Popular',
  toHigh: 'Price: low to high',
  toLow: 'Price: high to low',
  topRated: 'Top rated first',
} as const;

const ratingTypes = [5, 4, 3, 2, 1] as const;

const ratingTypesMap: GenericObject = {
  '1': 'Terribly',
  '2': 'Badly',
  '3': 'Not bad',
  '4': 'Good',
  '5': 'Perfect'
} as const;


const CITIES: GenericObject = {
  paris: 'Paris',
  cologne: 'Cologne',
  brussels: 'Brussels',
  amsterdam: 'Amsterdam',
  hamburg: 'Hamburg',
  dusseldorf: 'Dusseldorf'
} as const;

const AllCities: Array<City> = [
  {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }},
  {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13
    }},
  {
    'name':'Amsterdam',
    'location':{
      'latitude':52.37454,
      'longitude':4.897976,
      'zoom':13}},
  {
    'name':'Hamburg',
    'location':{
      'latitude':53.550341,
      'longitude':10.000654,
      'zoom':13}},
  {
    'name':'Dusseldorf',
    'location':{
      'latitude':51.225402,
      'longitude':6.776314,
      'zoom':13}},
  {
    'name':'Brussels',
    'location':{
      'latitude':50.846557,
      'longitude':4.351697,
      'zoom':13}},
];


const URL_MARKER_DEFAULT = '../public/img/pin.svg';

const URL_MARKER_CURRENT = '../public/img/pin-active.svg';

export {AuthorizationStatus, AppRoute, CITIES, sortTypes, ratingTypes, ratingTypesMap, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, AllCities};
