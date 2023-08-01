import React from 'react';

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

type MapProps = {
  city: City;
  activeId: string | null;
  offerId?: string | null;
  locations: Array<CityPoint>;
  widthParam: 'string';
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


type MapCard = Card & {
  handleHover?: React.SetStateAction<string | null>;
  handleLeave?: React.SetStateAction<string | null>;
}

type Cards = {
  cards: MapCard[];
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

type NearPlacesProps = {
  places: Array<Card>;
  setChosenCard: React.SetStateAction<string>;
}

type NearPlaceItemProps = Card & {
  handleHover?: React.SetStateAction<string | null>;
  handleLeave?: React.SetStateAction<string | null>;
}

export type {Card, Cards, Place, City, Geo, Offer, MapCard, StarProps, MapProps, CityPoint, ReviewItemProps, NearPlacesProps, NearPlaceItemProps};
