type Card = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
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


type Place = Card & {
  city: City;
  location: Location;
}


export type {Card, Cards, Place, Location, City};
