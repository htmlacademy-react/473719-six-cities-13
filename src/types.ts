type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type City = {
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
      };
  };
}

type Geo = City & {
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type Card = Offer & Geo & {
  previewImage: string;
}


type MainPageCardProps = Card & {
  handleHover?: () => void;
}

type Cards = {
  cards: MainPageCardProps[];
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

type StarProps = {
  rate: number;
   choseStar: () => void;
}


export type {Card, Cards, Place, City, Geo, Offer, MainPageCardProps, StarProps};
