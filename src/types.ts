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
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
}

type CityPoint = {
  id: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type CityWithLocations = {
  city: City;
  activeId: string | null;
  locations: Array<CityPoint>;
}


type Geo = {
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type Card = Offer & Geo & {
  city: City;
  previewImage: string;
}


type MainPageCardProps = Card & {
  handleHover?: () => void;
  handleLeave?: () => void;
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

type ReviewItemProps = {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  imgUrl: string;
  reviewText: string;
  date: string;
}

type StarProps = {
  rate: number;
   choseStar: () => void;
}


export type {Card, Cards, Place, City, Geo, Offer, MainPageCardProps, StarProps, CityWithLocations, CityPoint, ReviewItemProps};
