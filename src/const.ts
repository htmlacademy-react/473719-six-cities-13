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
};

const CITIES: Array<string> = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export {AuthorizationStatus, AppRoute, CITIES, sortTypes, ratingTypes, ratingTypesMap};
