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

const CITIES: Array<string> = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export {AuthorizationStatus, AppRoute, CITIES, sortTypes};
