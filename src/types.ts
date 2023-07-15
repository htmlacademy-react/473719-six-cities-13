type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}


type Card = Offer & {
  previewImage: string;
}

type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
  }

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type Cards = {
  cards: Card[];
}


type Place = Offer & {
  description: string;
  city: City;
  location: Location;
  goods: Array<string>;
  images: Array<string>;
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  bedrooms: number;
  maxAdults: number;
}


export type {Card, Cards, Place, Location, City, Offer};
