type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}


type Geo = {
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
      };
  };
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
};
}

type Cards = {
  cards: Card[];
}

type Card = Offer & Geo & {
  previewImage: string;
}


type Place = Offer & Geo & {
  description: string;
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


export type {Card, Cards, Place, Geo, Offer};
