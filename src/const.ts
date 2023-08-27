import { City } from './types/types';
import { StatusCodes } from 'http-status-codes';

export const EMPTY_LINE = '';
export const EMPTY_RATING = 0;
export const MIN_LINE = 49;
export const MAX_LINE = 301;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const TIMEOUT_SHOW_ERROR = 2000;
export const ratingTypes = [5, 4, 3, 2, 1] as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Root ='/',
  LogIn = '/login',
  FavoriteItems='/favorites',
  OfferItem= '/offer/:id',
  EverythingElse ='*',
}

export interface GenericObject {
  [key: string]: string;
}

export const sortTypes: GenericObject = {
  normal: 'Popular',
  toHigh: 'Price: low to high',
  toLow: 'Price: high to low',
  topRated: 'Top rated first',
} as const;

export const AppartVariants: GenericObject = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};


export const ratingTypesMap: GenericObject = {
  '1': 'Terribly',
  '2': 'Badly',
  '3': 'Not bad',
  '4': 'Good',
  '5': 'Perfect'
} as const;

export const CITIES: GenericObject = {
  paris: 'Paris',
  cologne: 'Cologne',
  brussels: 'Brussels',
  amsterdam: 'Amsterdam',
  hamburg: 'Hamburg',
  dusseldorf: 'Dusseldorf'
} as const;

export const AllCities: Array<City> = [
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

export const enum APIroute {
  Offers = '/offers',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
}


export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}
